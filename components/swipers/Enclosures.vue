<script setup lang="ts">
const { slidePrev, slideNext, enclosuresBreakpoints } = useSwiperHelpers();

const swiperRef = ref(null);
</script>

<template>
  <Swiper
    ref="swiperRef"
    class="relative"
    :modules="[SwiperEffectCoverflow]"
    :slides-per-view="1.1"
    :slides-per-group="1"
    :centered-slides="true"
    :loop="true"
    :effect="'coverflow'"
    :coverflow-effect="{
      slideShadows: false,
      rotate: 0,
      scale: 0.9,
    }"
    :breakpoints="enclosuresBreakpoints"
  >
    <SwiperSlide class="py-10 !flex justify-center" v-for="i in 6" :key="i">
      <NuxtImg
        class="h-[250px] md:h-[300px] lg:h-[450px] 2xl:h-[500px] object-cover rounded-xl shadow-lg"
        :src="`/img/enclosures/enclosure-${i}.jpg`"
        :ismap="undefined"
        :loading="'lazy'"
        :decoding="'auto'"
        :format="'webp'"
        width="1920"
        height="1080"
      />
    </SwiperSlide>
    <SwipersButtonPrev @slide-prev="slidePrev(swiperRef)" />
    <SwipersButtonNext @slide-next="slideNext(swiperRef)" />
  </Swiper>
</template>
