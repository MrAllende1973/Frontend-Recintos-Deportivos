<script setup lang="ts">
const emits = defineEmits<{
  (e: 'slidePrev'): void;
}>();
</script>

<template>
  <button
    class="hidden lg:block absolute top-1/2 left-4 p-2 -translate-y-1/2 z-20 text-white group"
    @click="emits('slidePrev')"
  >
    <Icon
      class="opacity-50 group-hover:opacity-100 group-hover:scale-125"
      name="octicon:chevron-left-16"
      size="50"
    />
  </button>
</template>
