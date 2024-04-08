<script setup lang="ts">
import type { APIReservation } from '~/types';

const route = useRoute();
const store = useResevationStore();

const reservations = ref<APIReservation[]>([]);
const enclosureId = ref(Number(route.params.id));
const { actualWeek, actualYear } = useHoraryConfig();
const enclosures: Record<number, string> = {
  1: 'Fútbol',
  2: 'Tenis',
  3: 'Baloncesto',
};

const getAllReservations = async () => {
  const { data } = await useAsyncData('reservations', () =>
    store.getAllReservationsByEnclosure(
      enclosureId.value,
      actualWeek,
      actualYear
    )
  );

  if (data.value) {
    reservations.value = data.value.data;
  }
};

const updateReservations = (reservation: APIReservation) => {
  reservations.value.push(reservation);
};

const enclosureName = computed(() => enclosures[enclosureId.value]);

await getAllReservations();
</script>

<template>
  <section class="px-4 lg:px-10 mt-6 mb-20">
    <div class="flex flex-col lg:flex-row lg:items-center gap-x-4 gap-y-2">
      <h1 class="lg:text-xl font-medium">
        Realiza tu reserva /
        <span class="text-gray-400">Cancha de {{ enclosureName }}</span>
      </h1>
      <NuxtLink
        class="bg-gradient-to-b w-fit from-orange-yellow to-[#df922d] hover:from-[#df922d] hover:to-[#df922d] text-white px-2 py-1 rounded-md text-sm lg:text-base"
        to="/reservations"
        >Cambiar</NuxtLink
      >
    </div>
    <HorariesDefault
      :enclosure-id="enclosureId"
      :reservations="reservations"
      @update-reservations="(value) => updateReservations(value)"
    />
  </section>
</template>
