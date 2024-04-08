<script setup lang="ts">
const { actualMonth, actualWeek, actualYear } = useHoraryConfig();
</script>

<template>
  <div class="relative flex lg:justify-between lg:items-center">
    <div class="flex flex-col lg:flex-row items-start lg:items-center gap-x-10">
      <div class="flex gap-x-2">
        <h2 class="text-lg font-medium text-azure">
          {{ actualMonth }}
        </h2>
        <h2 class="text-lg font-medium text-gray-400">
          Semana {{ actualWeek }}
        </h2>
      </div>
      <ul class="flex min-w-max gap-x-5">
        <li class="flex items-center gap-x-2">
          <div class="w-4 h-4 bg-available rounded-full"></div>
          <span>Disponible</span>
        </li>
        <li class="flex items-center gap-x-2">
          <div class="w-4 h-4 bg-not-available rounded-full"></div>
          <span>No disponible</span>
        </li>
        <li class="flex items-center gap-x-2">
          <div class="w-4 h-4 bg-reserved rounded-full"></div>
          <span>Reservado</span>
        </li>
        <li class="flex items-center gap-x-2">
          <div class="w-4 h-4 bg-usage-history rounded-full"></div>
          <span>Historial de uso</span>
        </li>
      </ul>
    </div>
    <span class="absolute top-0 right-0 text-xl font-medium text-gray-400">{{
      actualYear
    }}</span>
  </div>
</template>
