<script setup lang="ts">
import type { User } from '~/types';

const store = useUserStore();

const user = computed((): User | null => store.user);

const isOpen = ref(false);
</script>

<template>
  <header class="relative h-[80px]">
    <div
      class="fixed top-0 right-0 flex justify-between items-center bg-white z-20 w-full lg:w-[calc(100%-80px)] h-[80px] pl-4 pr-2 lg:px-10 shadow-md"
    >
      <NuxtImg
        src="/img/logos/logo-uta-horizontal.png"
        :ismap="undefined"
        :loading="'lazy'"
        :decoding="'auto'"
        :format="'webp'"
        width="220"
        height="60"
      />

      <div class="lg:hidden p-2" @click="isOpen = !isOpen">
        <Icon
          :name="isOpen ? 'iconamoon:close-bold' : 'humbleicons:bars'"
          size="32"
        />
      </div>
      <div
        class="absolute top-20 left-0 bg-white p-4 lg:p-0 w-full flex-col lg:relative lg:w-fit lg:top-0 lg:flex shadow-md lg:shadow-none"
        :class="isOpen ? 'flex' : 'hidden'"
      >
        <LayoutsDefaultAccountButton v-if="user" :user="user" />

        <div v-else class="flex flex-col lg:flex-row gap-x-2">
          <NuxtLink
            to="/login"
            class="px-4 py-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            Iniciar Sesión
          </NuxtLink>
          <NuxtLink
            to="/register"
            class="bg-royal-blue hover:bg-[#2d4471] transition-colors text-white px-4 py-2 rounded-lg"
          >
            Registrarse
          </NuxtLink>
        </div>
      </div>
    </div>
  </header>
</template>
