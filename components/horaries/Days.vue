<script setup lang="ts">
const { actualDay, getNumberDayOfWeek, getDayOfWeek } = useHoraryConfig();
</script>

<template>
  <div class="grid grid-cols-7">
    <div
      class="flex items-center gap-x-2 border-b border-r px-2 h-[50px] w-full"
      v-for="index in 7"
      :key="index"
    >
      {{ getDayOfWeek(index) }}
      <span
        class="font-medium"
        :class="
          actualDay === getNumberDayOfWeek(index)
            ? 'text-azure'
            : 'text-gray-400'
        "
        >{{ getNumberDayOfWeek(index) }}
      </span>
    </div>
  </div>
</template>
