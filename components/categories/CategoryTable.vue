<script setup>
const props = defineProps(["categories"]);
</script>
<template>
     <table class="bg-white rounded-md w-full shadow-md border border-gray-300">
        <thead>
            <tr class="bg-gray-100 text-left">
                <td class="border border-gray-300 py-2 px-4">#</td>
                <td class="border border-gray-300 py-2 px-4">Name</td>
                <td class="border border-gray-300 py-2 px-4">Action</td>

             
            </tr>
        </thead>

        <tbody>
            <tr
                class="text-left"
                v-for="(index,category) in categories" :key="category.id"
            >
                <td class="border border-gray-300 py-2 px-4">
                    {{ index + 1 }}
                </td>
                <td class="border border-gray-300 py-2 px-4">
                   {{category?.name}}
                </td>
                
                <td class="border 0 border-gray-300 py-2 px-4">
                    
                </td>
            </tr>
        </tbody>
    </table>
</template>