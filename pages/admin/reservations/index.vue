<script setup lang="ts">
definePageMeta({
  layout: 'admin',
});

const cards = ref([
  {
    id: 1,
    title: 'Fútbol',
    img: '/img/enclosures/enclosure-4.jpg',
  },
  {
    id: 2,
    title: 'Tenis',
    img: '/img/enclosures/enclosure-3.jpg',
  },
  {
    id: 3,
    title: 'Baloncesto',
    img: '/img/enclosures/enclosure-1.jpg',
  },
]);
</script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
    <NuxtLink
      class="relative rounded-xl overflow-hidden shadow-xl group"
      v-for="card in cards"
      :key="card.id"
      :to="{
        path: `/admin/reservations/cancha-de-${card.title.toLowerCase()}`,
        query: {
          id: card.id,
        },
      }"
    >
      <NuxtImg
        class="md:h-[300px] group-hover:scale-105 transition-transform duration-500"
        :src="card.img"
        :ismap="undefined"
        :loading="'lazy'"
        :decoding="'auto'"
        :format="'webp'"
        width="800"
        height="600"
      />
      <div
        class="absolute bottom-0 left-0 w-full h-1/2 flex items-end pb-10 justify-center bg-gradient-to-t from-black to-transparent text-white font-bold text-2xl"
      >
        {{ card.title }}
      </div>
    </NuxtLink>
  </div>
</template>
