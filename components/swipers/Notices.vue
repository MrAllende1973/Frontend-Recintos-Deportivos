<script setup lang="ts">
const { slidePrev, slideNext, noticesBreakpoints } = useSwiperHelpers();

const swiperRef = ref(null);
</script>

<template>
  <Swiper
    ref="swiperRef"
    class="relative"
    :slides-per-view="1"
    :slides-per-group="1"
    :loop="true"
    :space-between="20"
    :breakpoints="noticesBreakpoints"
  >
    <SwiperSlide class="py-10" v-for="i in 3" :key="i">
      <NuxtImg
        class="object-fill rounded-xl shadow-lg"
        :src="`/img/notices/notice-${i}.jpg`"
        :ismap="undefined"
        :loading="'lazy'"
        :decoding="'auto'"
        :format="'webp'"
        width="1080"
        height="1080"
      />
    </SwiperSlide>
    <SwipersButtonPrev class="-left-2" @slide-prev="slidePrev(swiperRef)" />
    <SwipersButtonNext class="-right-2" @slide-next="slideNext(swiperRef)" />
  </Swiper>
</template>
