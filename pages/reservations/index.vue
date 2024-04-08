<script setup lang="ts">
const cards = ref([
  {
    id: 1,
    title: 'Fútbol',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem repellendus sapiente doloremque, non corporis optio. Aliquid, incidunt mollitia delectus modi ex quos doloribus blanditiis. Fugit delectus tempora repellat placeat sit!',
    img: '/img/enclosures/enclosure-4.jpg',
  },
  {
    id: 2,
    title: 'Tenis',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem repellendus sapiente doloremque, non corporis optio. Aliquid, incidunt mollitia delectus modi ex quos doloribus blanditiis. Fugit delectus tempora repellat placeat sit!',
    img: '/img/enclosures/enclosure-3.jpg',
  },
  {
    id: 3,
    title: 'Baloncesto',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem repellendus sapiente doloremque, non corporis optio. Aliquid, incidunt mollitia delectus modi ex quos doloribus blanditiis. Fugit delectus tempora repellat placeat sit!',
    img: '/img/enclosures/enclosure-1.jpg',
  },
]);
</script>

<template>
  <section class="grid grid-cols-4 px-10 gap-4 my-10 h-full">
    <div
      v-for="card in cards"
      :key="card.id"
      class="rounded-xl overflow-hidden shadow-md"
    >
      <NuxtImg
        :src="card.img"
        :ismap="undefined"
        :loading="'lazy'"
        :decoding="'auto'"
        :format="'webp'"
        width="800"
        height="600"
      />
      <article class="p-3">
        <h1 class="text-lg font-medium">{{ card.title }}</h1>
        <p class="text-gray-600">
          {{ card.description }}
        </p>
        <div class="h-[0.5px] bg-gray-100 my-4"></div>
        <NuxtLink
          :to="`/reservations/enclosure/${card.id}`"
          class="block text-center w-full text-white px-3 py-2 bg-gradient-to-b from-orange-yellow to-[#df922d] hover:from-[#df922d] hover:to-[#df922d] rounded-md font-medium"
        >
          Realizar Reserva
        </NuxtLink>
      </article>
    </div>
  </section>
</template>
