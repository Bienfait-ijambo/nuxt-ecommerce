
export function useHeaders() {

    const userCookie: Ref<{
        message: string,
        data: {
            token: {
                accessToken: string,
                refreshToken: string
            }
        }
    }> = useCookie('user', userCookieSettings);
    const accessToken = userCookie.value?.data?.token?.accessToken

    const headers = {
        Accept: "application/json",
        Authorization: `Bearer ${accessToken}`,
    }
    return headers
}



