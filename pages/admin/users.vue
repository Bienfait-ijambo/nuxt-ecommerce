<script setup>
definePageMeta({
  layout: "admin",
});

const showModal = ref(false);

const userStore = useUserStore()
const {
    userData,
} = storeToRefs(userStore);



await userStore.fetchUsers();


</script>
<template>
  <div class="h-screen">
    <div class="flex justify-end mb-4 pt-4">
     
    </div>

    <UserTable :userData="userData"/>
     
   
  </div>
</template>
