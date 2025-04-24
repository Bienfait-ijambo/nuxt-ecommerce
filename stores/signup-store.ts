import { defineStore } from "pinia";

export const useSignUpStore = defineStore('signup-store', () => {
  const registerInput = ref({
    email: "ben@gmail.com",
    password: "",
   otpCode:''
  });
  
    return { registerInput }
  })