<script setup lang="ts">
import type { User } from '~/types';

const props = defineProps<{
  user: User | null;
}>();

const store = useUserStore();

const isOpenModal = ref(false);

const userFullName = computed(() => {
  return props.user?.names + ' ' + props.user?.surnames;
});
</script>

<template>
  <div id="accountButton" class="relative">
    <button
      class="flex items-center gap-x-2 px-4 py-2 w-full justify-between hover:bg-gray-100 rounded-lg transition-colors"
      @click="isOpenModal = !isOpenModal"
    >
      <span>{{ userFullName }}</span>
      <Icon name="tabler:chevron-down" />
    </button>
    <Teleport v-if="isOpenModal" to="body">
      <div
        class="fixed top-0 left-0 w-full h-full bg-black/50 z-20 animate-modal"
        @click="isOpenModal = false"
      >
        <div
          class="fixed lg:top-16 top-36 right-4 lg:right-10 w-[250px] bg-white p-3 rounded-md shadow-xl z-30"
        >
          <NuxtLink class="block py-1 hover:bg-gray-100 px-2 rounded-md" to="/"
            >Mi Perfil</NuxtLink
          >
          <NuxtLink
            to="/"
            class="block text-left w-full py-1 hover:bg-gray-100 px-2 rounded-md"
            @click="store.logout"
          >
            Cerrar Sesión
          </NuxtLink>
        </div>
      </div>
    </Teleport>
  </div>
</template>
