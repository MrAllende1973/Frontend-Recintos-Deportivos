<script setup lang="ts">
const store = useUserStore();

const links = ref([
  {
    id: 1,
    text: 'Inicio',
    route: '/admin',
    icon: 'heroicons:home-solid',
    border: 'border-r border-b',
  },
  {
    id: 2,
    text: 'Reservas',
    route: '/admin/reservations',
    icon: 'majesticons:calendar',
    border: 'border-b border-r lg:border-r-none',
  },
  {
    id: 3,
    text: 'Estadísticas',
    route: '/admin/statistics',
    icon: 'fluent-mdl2:b-i-dashboard',
    border: 'border-r',
  },
  {
    id: 4,
    text: 'Reportes',
    route: '/admin/reports',
    icon: 'carbon:report',
    border: '',
  },
]);
</script>

<template>
  <nav class="fixed bottom-0 w-full lg:relative lg:w-fit z-20">
    <div class="relative lg:h-screen lg:min-w-[300px]">
      <div
        class="relative lg:fixed lg:top-0 min-w-[300px] h-[80px] lg:h-full bg-white lg:p-6 border-t-[1px] lg:border-t-0 border-gray/40 lg:border-r-[1px]"
      >
        <NuxtImg
          class="hidden lg:block mx-auto"
          src="/img/logos/logo-uta-horizontal.png"
          :ismap="undefined"
          :loading="'lazy'"
          :decoding="'auto'"
          :format="'webp'"
          width="220"
          height="60"
        />
        <div
          class="absolute lg:relative -top-[30px] lg:top-0 left-1/2 -translate-x-1/2 lg:left-0 lg:-translate-x-0 flex flex-col items-center justify-center lg:mt-10"
        >
          <div class="hidden lg:block">
            <Icon
              class="shadow-md p-3 rounded-full bg-white"
              name="fa-solid:user-tie"
              size="120"
            />
          </div>
          <div class="lg:hidden">
            <Icon
              class="shadow p-2 rounded-full bg-white"
              name="fa-solid:user-tie"
              size="60"
            />
          </div>
          <h1 class="hidden lg:block font-bold mt-2 text-x">Administrador</h1>
        </div>
        <ul
          class="grid grid-cols-4 lg:grid-cols-2 lg:border rounded-xl lg:mt-10"
        >
          <li v-for="link in links" :key="link.id">
            <NuxtLink
              class="flex flex-col lg:gap-y-2 items-center justify-center w-full h-[80px] text-xs gap-y-1 lg:text-base lg:h-[100px] text-gray-500"
              :class="link.border"
              :to="link.route"
              exact-active-class="bg-white lg:rounded-xl lg:scale-110 lg:shadow-lg text-gray-900"
            >
              <Icon :name="link.icon" size="30" />
              <h1>{{ link.text }}</h1>
            </NuxtLink>
          </li>
        </ul>
        <div class="hidden lg:block absolute bottom-4 left-0 w-full px-6">
          <button
            class="bg-white w-full py-2 shadow rounded-lg"
            @click="store.logout"
          >
            Cerrar Sesión
          </button>
        </div>
      </div>
    </div>
  </nav>
</template>
