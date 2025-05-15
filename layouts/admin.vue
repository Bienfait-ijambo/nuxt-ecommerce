

<!-- dashboard menu -->
 <script setup>
import CategoryIcon from '~/components/Icons/CategoryIcon.vue';
import DashboardIcon from '~/components/Icons/DashboardIcon.vue';
import PaymentIcon from '~/components/Icons/PaymentIcon.vue';
import ProductIcon from '~/components/Icons/ProductIcon.vue';
import UserIcon from '~/components/Icons/UserIcon.vue';


const userCookie = useCookie('user', userCookieSettings);
  
const drawerOpen=ref(true)
const showMenu=ref(false)

const headers=useHeaders()



const links=ref([
    {
        menu:"Dashboard",
        icon:DashboardIcon,
        link:'/admin/dashboard'
    },
    {
        menu:"Categories",
        icon:CategoryIcon,
        link:'/admin/categories'
    },
    {
        menu:"Products",
        icon:ProductIcon,
        link:'/admin/products'
    },
    {
        menu:"Payments",
        icon:PaymentIcon,
        link:'/admin/payments'
    },
    {
        menu:"Users",
        icon:UserIcon,
        link:'/admin/users'
    },
    
])
function  toggleDrawer() {
        drawerOpen.value = !drawerOpen.value
      }

      const {$logout}=useNuxtApp()

      // function logoutUser(){
      //   userCookie.value=null
      //   window.location.href='/auth/signin'
      // }
      
</script>
<template>
    <div class="flex h-screen bg-gray-100">
      <!-- Sidebar Drawer -->
    
      <aside
        :class="[
          'bg-white shadow-lg h-full transition-all duration-300 flex flex-col',
          drawerOpen ? 'w-59' : 'w-16',
        ]"
      >
        <div class="flex items-center justify-between px-4 py-3 border-b">
          <span v-if="drawerOpen" class="text-xl font-bold">Dashboard</span>
          <button
            @click="toggleDrawer"
            class="p-2 rounded-full hover:bg-gray-200 focus:outline-none focus:ring"
          >
          
            <svg
              v-if="drawerOpen"
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
            <svg
              v-else
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </button>
        </div>
  
        <nav class="flex-1 mt-4 space-y-2">
          <nuxtLink
          v-for="menu in links"
          :key="menu"
          :to="menu.link"
            href="#"
            class="flex items-center gap-4 px-4 py-2 text-gray-700 hover:bg-gray-100"
          >
         
            <component :is="menu.icon"/> 
  
            <span v-if="drawerOpen">{{menu.menu}}</span>
          </nuxtLink>
         
         
        </nav>
      </aside>
  
      <!-- Main Content -->
      <div class="flex-1 flex flex-col">
        <header
          class="bg-white shadow px-6 py-3 flex items-center justify-between"
        >
          <h1 class="text-lg font-semibold">Welcome Back!</h1>
          <div class="relative" @click="showMenu = !showMenu">
            <img
              class="w-10 h-10 rounded-full cursor-pointer ring-2 ring-gray-300"
              src="https://i.pravatar.cc/150?img=3"
              alt="avatar"
            />
            <transition name="fade">
              <div
                v-if="showMenu"
                class="absolute right-0 mt-2 w-56 bg-white border rounded-lg shadow-lg z-50"
              >
                <div class="p-4 border-b">
                  <p class="font-semibold">
                    {{ userCookie?.data?.user?.name }}

                   
                  </p>
                  <p class="text-sm text-gray-600"> {{ userCookie?.data?.user?.email }}</p>
                </div>
                <ul>
                 
                  <li @click="$logout()">
                    <a href="#" class="block text-red-500 px-4 py-2 hover:bg-gray-100"
                      >Logout</a
                    >
                  </li>
                </ul>
              </div>
            </transition>
          </div>
        </header>
  
        <main class="flex-1 overflow-y-auto p-6">
         <slot></slot>
        </main>
      </div>
    </div>
  </template>
  


  <style scoped>

  .fade-enter-active,
   .fade-leave-active {
     transition: opacity 0.2s;
   }
   .fade-enter-from,
   .fade-leave-to {
     opacity: 0;
   }
   
 .router-link-exact-active:hover{
   color:white
 }
 .router-link-exact-active{
     --tw-bg-opacity: 1;
     background-color: rgb(59 130 246)/* #4338ca */;
     font-weight: 600;
     padding-top: 0.5rem /* 8px */;
     padding-bottom: 0.5rem /* 8px */;
     padding-left: 0.5rem /* 8px */;
     padding-right: 0.5rem /* 8px */;
     /* border-radius: 0.375rem  */
     color:white;
     cursor: pointer;
 }
 </style>
  
  