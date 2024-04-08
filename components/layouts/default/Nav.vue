<script setup lang="ts">
const links = ref([
  { id: 1, route: '/', icon: 'ic:round-home' },
  { id: 2, route: '/reservations', icon: 'mdi:calendar-week' },
  { id: 3, route: '/history', icon: 'icon-park-outline:list' },
  { id: 4, route: '/management', icon: 'akar-icons:clipboard' },
]);
</script>

<template>
  <nav
    class="fixed bottom-0 w-full lg:relative lg:w-fit z-20 text-white"
  >
    <div class="relative lg:h-screen min-h-[80px] lg:min-w-[80px]">
      <ul
        class="relative lg:fixed lg:top-0 flex lg:flex-col min-w-[80px] h-[80px] lg:h-full bg-royal-blue border-t-[1px] lg:border-t-0 border-gray/40 lg:border-r-[1px]"
      >
        <li
          class="h-full w-full lg:hover:bg-black/20"
          v-for="link in links"
          :key="link.id"
        >
          <NuxtLink
            class="grid place-content-center h-full"
            :to="link.route"
            exact-active-class="text-royal-blue bg-white"
          >
            <Icon :name="link.icon" size="32" />
          </NuxtLink>
        </li>
      </ul>
    </div>
  </nav>
</template>
