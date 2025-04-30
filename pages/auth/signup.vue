<script setup>
import { useVuelidate } from "@vuelidate/core";
import { required, email } from "@vuelidate/validators";

definePageMeta({
  layout: "auth",
});

const rules = {
  name:{required},
  email: { required, email }, // Matches state.firstName
  password: { required }, // Matches state.lastName
};

const signUpStore=useSignUpStore()
const {registerInput}=storeToRefs(signUpStore)

const v$ = useVuelidate(rules, registerInput);
const loading = ref(false);
const router=useRouter()




async function submitInput() {
  const isValid = v$.value.$validate();
  if (!isValid) return;

  try {
    loading.value = true;
    const res = await $fetch("/api/auth/register", {
      method: "POST",
      body: JSON.stringify(registerInput.value),
    });

   
    loading.value = false;
    router.push('/auth/email-verification')

  } catch (error) {
    loading.value = false;
    showLoginOrSignUpError(error)
    
  }
}
</script>
<template>
  <div class="bg-white h-screen">
    <div class="flex justify-between">
      <div></div>
      <div class="w-[300px] mt-20">
        <div class="flex flex-col gap-2">
          <h1 class="text-2xl mb-3">Sign up</h1>
          <FormError :errors="v$.name.$errors">
            <BaseInput
              v-model="registerInput.name"
              :type="'text'"
              :placeholder="''"
            />
          </FormError>
        
          <FormError :errors="v$.email.$errors">
            <BaseInput
              v-model="registerInput.email"
              :type="'text'"
              :placeholder="'info@gmail.com'"
            />
          </FormError>

          <FormError :errors="v$.password.$errors">
            <BaseInput
              v-model="registerInput.password"
              :type="'password'"
              :placeholder="'password'"
            />
          </FormError>

          <BaseBtn
            @click="submitInput"
            :loading="loading"
            label="Sign up"
          ></BaseBtn>

          <p
            class="text-sm font-normal text-center text-gray-700 dark:text-gray-500 sm:text-start"
          >
            Already have an account?
            <NuxtLink
              to="/auth/signin"
              class="text-indigo-500 hover:text-brand-600 font-semibold"
              >Sign in</NuxtLink
            >
          </p>
        </div>
      </div>
      <div></div>
    </div>
  </div>
</template>
