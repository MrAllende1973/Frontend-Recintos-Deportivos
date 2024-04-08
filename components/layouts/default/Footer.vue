<script setup lang="ts">
const links = ref([
  {
    id: 1,
    url: 'https://www.facebook.com/utarapaca',
    icon: 'ri:facebook-fill',
  },
  {
    id: 2,
    url: 'https://www.twitter.com/utarapaca',
    icon: 'ri:twitter-x-fill',
  },
  {
    id: 3,
    url: 'https://www.instagram.com/utarapaca/',
    icon: 'ri:instagram-fill',
  },
  { id: 4, url: 'https://www.youtube.com/utaplay', icon: 'ri:youtube-fill' },
]);

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};
</script>

<template>
  <footer
    class="grid grid-cols-1 lg:grid-cols-3 place-items-center bg-dark-blue text-white px-4 gap-x-20 gap-y-10 lg:px-10 py-10"
  >
    <NuxtImg
      class="w-full md:w-[400px] lg:w-[400px]"
      src="/img/logos/logo-acreditacion.png"
      :ismap="undefined"
      :loading="'lazy'"
      :decoding="'auto'"
      :format="'webp'"
      width="1307"
      height="465"
    />
    <div class="flex flex-col items-center justify-center gap-y-4 order-first lg:order-none">
      <ul class="flex items-center gap-x-6 lg:gap-x-10">
        <li v-for="link in links" :key="link.id">
          <NuxtLink
            class="flex items-center justify-center w-10 h-10 rounded-full bg-white text-dark-blue hover:bg-orange-yellow hover:text-white transition-colors"
            :href="link.url"
            target="_blank"
          >
            <Icon :name="link.icon" size="24" />
          </NuxtLink>
        </li>
      </ul>
      <span class="text-orange-yellow text-sm text-center"
        >Universidad de Tarapacá - Universidad del Estado de Chile</span
      >
    </div>
    <button
      class="hidden lg:block w-16 h-16 bg-orange-yellow text-white rounded-full place-self-end self-center hover:scale-110 transition-transform"
      @click="scrollToTop"
    >
      <Icon name="tabler:chevron-up" size="40" />
    </button>
  </footer>
</template>
