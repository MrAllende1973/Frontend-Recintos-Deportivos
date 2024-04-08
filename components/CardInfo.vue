<script setup lang="ts">
defineProps<{
  title: string;
  description: string;
  buttonText: string;
}>();
</script>

<template>
  <article
    class="flex flex-col justify-between w-[300px] gap-y-4 py-[30px] px-5 text-center shadow-effect-1 rounded-md bg-white"
  >
    <h3 class="text-lg font-bold">{{ title }}</h3>
    <p class="text-sm font-light">
      {{ description }}
    </p>
    <NuxtLink
      to="/reservations"
      class="uppercase w-fit mx-auto bg-gradient-to-b from-orange-yellow to-dark-orange-yellow text-xs lg:text-sm text-white font-semibold px-9 py-2 rounded-full shadow-lg"
    >
      {{ buttonText }}
    </NuxtLink>
  </article>
</template>
