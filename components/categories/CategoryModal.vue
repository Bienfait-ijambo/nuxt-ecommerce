<script setup>
const props = defineProps(["show"]);
const emit=defineEmits(['toggleCategoryModal'])

const categoryInput = ref({ name: "" });
const loading = ref(false);

async function submitInput() {
  try {
    loading.value = true;
    const res = await $fetch("/api/admin/category/create-category", {
      method: "POST",
      body: JSON.stringify(categoryInput.value),
    });

    loading.value = false;
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
       
      <BaseBtn class="bg-gray-400" 
      @click="emit('toggleCategoryModal')" 
      label="Close"></BaseBtn>

      <BaseBtn :loading="loading" @click="submitInput" label="Save"></BaseBtn>
    </template>
  </BaseModal>
</template>
