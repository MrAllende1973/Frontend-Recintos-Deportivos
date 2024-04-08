<script setup lang="ts">
const route = useRoute();
</script>

<template>
  <main
    class="flex justify-center items-center lg:px-4 xl:px-0 lg:bg-gray-100"
    :class="route.path === '/login' ? 'h-[100dvh]' : 'lg:h-[100dvh]'"
  >
    <div
      class="grid grid-cols-1 lg:grid-cols-2 w-screen max-w-screen-lg lg:h-[600px] lg:rounded-xl lg:shadow-lg overflow-hidden"
    >
      <div class="hidden lg:grid lg:place-content-center bg-royal-blue">
        <NuxtImg
          src="/img/logos/logo-uta-white.png"
          :loading="'lazy'"
          :width="300"
          :height="214"
          :ismap="undefined"
          :decoding="'auto'"
        />
      </div>
      <div class="overflow-y-auto bg-white">
        <slot />
      </div>
    </div>
  </main>
</template>
