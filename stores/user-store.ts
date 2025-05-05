import { defineStore } from "pinia";

export const useUserStore = defineStore('user-store', () => {

    const search = ref("")
    const userData = ref<any>(null)
    const page = ref(1)
    const limit = ref(10)

    const headers = useHeaders()




    async function fetchUsers() {


        const { data, refresh,error } = await useFetch("/api/admin/user/get", {
            headers: {
                ...headers
            },
            query: {
                search: search.value,
                page: page.value,
                limit: limit.value
            }
        });
        // console.log(error.value?.statusCode)

        userData.value = data.value
        limit.value = userData.value?.metadata?.limit
        page.value = userData.value?.metadata?.page




    }






    async function changePage(newPage: number) {
        page.value = newPage
        await fetchUsers()
    }




    return { changePage, fetchUsers, userData, search }
})