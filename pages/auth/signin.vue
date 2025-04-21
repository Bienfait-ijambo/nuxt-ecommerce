
<script setup>

definePageMeta({
    layout:'auth'
})

const loginInput=ref({
    email:'',
    password:''
})
</script>
<template>
    <div class="bg-white h-screen">
        <div class="flex justify-between">
      <div></div>
      <div class="w-[300px] mt-20">
        <div class="flex flex-col gap-2">
          <h1 class="text-2xl mb-3">Sign In</h1>
         
             
          <input
            type="text"
            name=""
            placeholder="info@gmail.com"
            id=""
            class="focus:bg-focus-900 h-11 w-full rounded-lg border 
            border-gray-300 bg-transparent px-4 py-2.5 text-sm text-gray-800 
             placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 focus:border-gray-700  
               focus:focus:border-brand-800"
          />
          <input
            type="password"
            name=""
            placeholder="Password"
            id=""
            class="mb-2  focus:bg-focus-900 h-11 w-full rounded-lg border 
            border-gray-300 bg-transparent px-4 py-2.5 text-sm text-gray-800 
             placeholder:text-gray-400 focus:border-brand-300 focus:outline-hidden focus:ring-3 focus:ring-brand-500/10 focus:border-gray-700  
               focus:focus:border-brand-800"
          />
       
          <button
       
            class="rounded-md mb-2 text-white py-2 bg-indigo-500 text-sm font-semibold"
          >
             Sign in
          </button>
          <p
                  class="text-sm font-normal text-center text-gray-700 dark:text-gray-500 sm:text-start"
                >
                  Dont have an account ?
                  <NuxtLink to="/auth/signup"
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
  