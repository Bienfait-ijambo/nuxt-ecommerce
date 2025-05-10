<script setup>
const props = defineProps(["show"]);
const emit=defineEmits(['toggleCategoryModal','getCategories'])
const headers = useHeaders()
const categoryStore=useCategoryStore()
const {categoryInput,edit}=storeToRefs(categoryStore)

const loading = ref(false);

async function submitInput() {
  try {
    loading.value = true;
    const categoryEnpoint=edit.value ?
     "/api/admin/category/update-category":
    "/api/admin/category/create-category"
    const res = await $fetch(categoryEnpoint, {
      method: "POST",
      body: JSON.stringify(categoryInput.value),
      headers: {
                    ...headers
                },
    });

    loading.value = false;
    edit.value=false
    emit('getCategories')
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
      <h1 class="text-2xl">Create category</h1>
    </template>

    <template #body>
      <BaseInput
        v-model="categoryInput.name"
        :type="'text'"
        :placeholder="''"
      />
    </template>

    <template #footer>
       
      <BaseBtn class="bg-slate-400" 
      @click="emit('toggleCategoryModal')" 
      label="Close"></BaseBtn>

      <BaseBtn :loading="loading" @click="submitInput" 
      :label="edit?'Update':'Create'"></BaseBtn>
    </template>
  </BaseModal>
</template>
