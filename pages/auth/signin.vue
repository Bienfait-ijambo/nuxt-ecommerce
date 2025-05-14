<script setup>
import { useVuelidate } from "@vuelidate/core";
import { required, email } from "@vuelidate/validators";

definePageMeta({
  layout: "auth",
});

const loginInput = ref({
  email: "",
  password: "",
});

const rules = {
  email: { required, email }, // Matches state.firstName
  password: { required }, // Matches state.lastName
};

const v$ = useVuelidate(rules, loginInput);

const loading = ref(false);
const router = useRouter();

const userCookie = useCookie("user", userCookieSettings);

async function submitInput() {
  const isValid = v$.value.$validate();
  if (!isValid) return;

  try {
    loading.value = true;
    const res = await $fetch("/api/auth/login", {
      method: "POST",
      body: JSON.stringify(loginInput.value),
    });

    loading.value = false;
    const userRole=res?.data?.user?.role
    if(userRole==='CUSTOMER'){
    userCookie.value = res;
    router.push("/");
    }else{
      console.log(res)
    userCookie.value = res;
    router.push("/admin/dashboard");
    }
    
  } catch (error) {
    loading.value = false;
    showLoginOrSignUpError(error);
  }
}


</script>
<template>
  <div class="bg-white h-screen">
    <div class="flex justify-between">
      <div></div>
      <div class="w-[300px] mt-20">
        <div class="flex flex-col gap-2">
          <h1 class="text-2xl mb-3">Sign In</h1>


          <FormError :errors="v$.email.$errors">
            <BaseInput
              v-model="loginInput.email"
              :type="'text'"
              :placeholder="'info@gmail.com'"
            />
          </FormError>

          <FormError :errors="v$.password.$errors">
            <BaseInput
              v-model="loginInput.password"
              :type="'password'"
              :placeholder="'password'"
            />
          </FormError>

          <BaseBtn
            @click="submitInput"
            :loading="loading"
            label="Sign in"
          ></BaseBtn>
          <p
            class="text-sm font-normal text-center text-gray-700 dark:text-gray-500 sm:text-start"
          >
            Dont have an account ?
            <NuxtLink
              to="/auth/signup"
              class="text-indigo-500 hover:text-brand-600 font-semibold"
              >Sign up</NuxtLink
            >
          </p>
        </div>
      </div>
      <div></div>
    </div>
  </div>
</template>
