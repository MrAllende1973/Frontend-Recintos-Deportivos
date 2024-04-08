<script setup lang="ts">
const { times } = useHoraryConfig();
</script>

<template>
  <div class="flex flex-col items-center">
    <div class="w-full text-sm border-b border-r h-[50px]"></div>
    <div
      class="grid place-content-center text-sm text-gray-400 border-b border-r h-[75px] w-full px-2"
      v-for="time in times"
      :key="time"
    >
      <span>{{ time }}</span>
    </div>
  </div>
</template>
