<script setup lang="ts">
import type { Block, APIReservation } from '~/types';
defineProps<{
  enclosureId: any;
  reservations: APIReservation[];
}>();

const emits = defineEmits<{
  (e: 'updateReservations', reservation: APIReservation): void;
}>();

const store = useUserStore();

const user = computed(() => store.user);
const block = ref<Block>();

const isOpenModal = ref(false);

const selectBlock = (_block: Block) => {
  isOpenModal.value = true;
  block.value = { ..._block };
};
</script>

<template>
  <div class="w-full overflow-x-auto mt-6">
    <HorariesHeader />

    <!-- Inicio Horario -->
    <div class="mt-4">
      <div class="flex w-max lg:w-full">
        <HorariesTimes />
        <div class="flex flex-col flex-1">
          <HorariesDays />
          <HorariesDefaultBlocks
            :reservations="reservations"
            :user="user"
            @select-block="(value) => selectBlock(value)"
          />
        </div>
      </div>
    </div>
    <!-- Fin Horario -->

    <Teleport to="body">
      <div
        v-if="isOpenModal && block"
        class="fixed top-0 left-0 w-full h-full grid place-content-center bg-black/50 z-30 animate-modal px-4"
      >
        <div class="bg-white w-full md:w-[500px] rounded-xl p-6">
          <FormsDefaultReservation
            :user="user"
            :enclosure-id="enclosureId"
            :block="block"
            @close-modal="isOpenModal = false"
            @update-reservations="(value) => emits('updateReservations', value)"
          />
        </div>
      </div>
    </Teleport>
  </div>
</template>
