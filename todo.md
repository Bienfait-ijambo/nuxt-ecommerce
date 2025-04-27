npx prisma migrate dev --name init




 


TO DO LIST
----------
- add icon to menu
- active menu
- useCookie
- add name[field]
- categories
- model
- table
- users
- handle roles
- product
- role management later




<script setup>
const props = defineProps(["show"]);

</script>
<template>
    <div
        v-show="show"
        className="fixed z-[1000] inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center p-4 sm:p-6 transition-opacity duration-300 ease-out"
    >
        <div
            className="bg-white p-4 sm:p-6 rounded-lg shadow-lg w-full max-w-md sm:w-2/3 md:w-1/2 lg:w-1/3 transform transition-transform duration-300 ease-out scale-95 opacity-0 animate-modalFadeIn"
        >
            <div className="flex justify-between items-center">
                <slot name="title"></slot>
            </div>

            <!-- modal body -->
            <div class="py-4">
                <slot name="body"></slot>
            </div>
            <!-- end modal body  -->

            <div className="flex gap-2 justify-end mt-4">
                <slot name="footer"></slot>
            </div>
        </div>
    </div>
</template>

<style scoped>
@keyframes modalFadeIn {
    from {
        opacity: 0;
        transform: scale(0.9);
    }
    to {
        opacity: 1;
        transform: scale(1);
    }
}
.animate-modalFadeIn {
    animation: modalFadeIn 0.3s ease-out forwards;
}
</style>


---users table


<script setup>


</script>
<template>
    <div class="flex">
        <input
          
            placeholder="Search..."
            type="text"
            class="mb-2 border rounded-md py-2 px-2 shadow-md"
        />
    </div>

    <table class="bg-white rounded-md w-full shadow-md border border-gray-300">
        <thead>
            <tr class="bg-gray-100 text-left">
                <td class="border border-gray-300 py-2 px-4">#</td>
                <td class="border border-gray-300 py-2 px-4">Name</td>
                <td class="border border-gray-300 py-2 px-4">Email</td>
                <td class="border border-gray-300 py-2 px-4">Role</td>
                <td class="border border-gray-300 py-2 px-4">Actions</td>
            </tr>
        </thead>

        <tbody>
            <tr
                class="text-left"
                v-for="(user, index) in users"
                :key="user?.id"
            >
                <td class="border border-gray-300 py-2 px-4">
                    {{ index + 1 }}
                </td>
                <td class="border border-gray-300 py-2 px-4">
                    {{ user?.name }}
                </td>
                <td class="border border-gray-300 py-2 px-4">
                    <a :href="'mailto:' + user?.email" class="text-indigo-700">
                        {{ user?.email }}
                    </a>
                </td>
                <td class="border border-gray-300 py-2 px-4">
                    {{ user?.role }}
                </td>
                <td class="border 0 border-gray-300 py-2 px-4">
                    
                </td>
            </tr>
        </tbody>
    </table>
</template>