npx prisma migrate dev --name init




 


TO DO LIST
----------
- show server errors signup
- login,jwt
- fix design otp_code
- dashboard





<!-- dashboard menu -->
<template>
  <div class="flex h-screen bg-gray-100">
    <!-- Sidebar Drawer -->
    <aside
      :class="[
        'bg-white shadow-lg h-full transition-all duration-300 flex flex-col',
        drawerOpen ? 'w-64' : 'w-20',
      ]"
    >
      <div class="flex items-center justify-between px-4 py-4 border-b">
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
        <a
          href="#"
          class="flex items-center gap-4 px-4 py-3 text-gray-700 hover:bg-gray-100"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
            />
          </svg>

          <span v-if="drawerOpen">Home</span>
        </a>
        <a
          href="#"
          class="flex items-center gap-4 px-4 py-3 text-gray-700 hover:bg-gray-100"
        >
          <svg
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M11 11V7a4 4 0 014 4v1a4 4 0 01-4 4v-4z"
            />
          </svg>
          <span v-if="drawerOpen">Analytics</span>
        </a>
        <a
          href="#"
          class="flex items-center gap-4 px-4 py-3 text-gray-700 hover:bg-gray-100"
        >
          <svg
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 8v4l3 3"
            />
          </svg>
          <span v-if="drawerOpen">Settings</span>
        </a>
      </nav>
    </aside>

    <!-- Main Content -->
    <div class="flex-1 flex flex-col">
      <header
        class="bg-white shadow px-6 py-4 flex items-center justify-between"
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
                <p class="font-semibold">John Doe</p>
                <p class="text-sm text-gray-600">john.doe@example.com</p>
              </div>
              <ul>
                <li>
                  <a href="#" class="block px-4 py-2 hover:bg-gray-100"
                    >Profile</a
                  >
                </li>
                <li>
                  <a href="#" class="block px-4 py-2 hover:bg-gray-100"
                    >Settings</a
                  >
                </li>
                <li>
                  <a href="#" class="block px-4 py-2 hover:bg-gray-100"
                    >Logout</a
                  >
                </li>
              </ul>
            </div>
          </transition>
        </div>
      </header>

      <main class="flex-1 overflow-y-auto p-6">
        <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          <div class="bg-white p-4 rounded-2xl shadow-md">
            <h2 class="text-xl font-semibold">Earnings</h2>
            <p class="text-gray-600">$12,430</p>
          </div>
          <div class="bg-white p-4 rounded-2xl shadow-md">
            <h2 class="text-xl font-semibold">Users</h2>
            <p class="text-gray-600">2,320</p>
          </div>
          <div class="bg-white p-4 rounded-2xl shadow-md">
            <h2 class="text-xl font-semibold">Orders</h2>
            <p class="text-gray-600">458</p>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      drawerOpen: true,
      showMenu: false,
    };
  },
  methods: {
    toggleDrawer() {
      this.drawerOpen = !this.drawerOpen;
    },
  },
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>

