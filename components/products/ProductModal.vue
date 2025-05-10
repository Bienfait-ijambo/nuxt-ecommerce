<script setup>
const props = defineProps(["show", "categories"]);
const emit = defineEmits(["toggleProductModal", "getProducts"]);

const productStore = useProductStore();
const { productInput, edit,productColors } = storeToRefs(productStore);
const headers = useHeaders()
const loading = ref(false);

async function submitInput() {
  try {
    loading.value = true;
    const { price, ...othersInput } = productInput.value;
    const productEnpoint = edit.value
      ? "/api/admin/product/update"
      : "/api/admin/product/create";
    const res = await $fetch(productEnpoint, {
      headers: {
        ...headers,
      },
      method: "POST",
      body: JSON.stringify({
        price: parseFloat(price),
        ...othersInput,
      }),
    });
    productInput.value = {};

    loading.value = false;
    edit.value = false;
    emit("getProducts");
    successMsg(res?.message);
  } catch (error) {
    loading.value = false;
    showLoginOrSignUpError(error);
  }
}
</script>
<template>
  <BaseModal v-show="show">
    <template #title>
      <h1 class="text-2xl">Create product</h1>
    </template>

    <template #body>
      <BaseInput
        class="mb-2"
        v-model="productInput.name"
        :type="'text'"
        :placeholder="'Product Name'"
      />
   
      <BaseInput
        class="mb-2"
        v-model="productInput.price"
        :type="'text'"
        min="1"
        :placeholder="'Product Price'"
      />

      <select
        class="focus:bg-focus-900 mb-2 h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 py-2.5 text-sm text-gray-800 placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 focus:border-gray-700 focus:focus:border-brand-800"
        v-model="productInput.color"
      >
        <option value="">colors</option>
        <option
          v-for="color in productColors"
          :key="color"
          :value="color"
        >
          {{color}}
        </option>
      </select>

      <select
        class="focus:bg-focus-900 h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 py-2.5 text-sm text-gray-800 placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 focus:border-gray-700 focus:focus:border-brand-800"
        v-model="productInput.categoryId"
      >
        <option value="">Categories</option>
        <option
          v-for="category in categories"
          :key="category.id"
          :value="category.id"
        >
          {{ category.name }}
        </option>
      </select>
    </template>

    <template #footer>
      <BaseBtn
        class="bg-slate-400"
        @click="emit('toggleProductModal')"
        label="Close"
      ></BaseBtn>

      <BaseBtn
        :loading="loading"
        @click="submitInput"
        :label="edit ? 'Update' : 'Create'"
      ></BaseBtn>
    </template>
  </BaseModal>
</template>
