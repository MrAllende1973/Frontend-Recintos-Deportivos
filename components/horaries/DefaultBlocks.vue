<script setup lang="ts">
import { _backgroundColor } from '#tailwind-config/theme';
import type { Block, User, APIReservation } from '~/types';

const props = defineProps<{
  user: User | null;
  reservations: APIReservation[];
}>();

const emits = defineEmits<{
  (e: 'selectBlock', value: Block): void;
}>();

const horaryConfig = useHoraryConfig();
const toast = useToast();
const { reservationNotifications } = useToastNotifications();

const notAuthenticated = () => {
  toast.add(
    reservationNotifications.error(
      'No autorizado',
      'Debes iniciar sesión para realizar reservas.'
    )
  );
};

const isSelectableDay = (index: number) => {
  const dayBlock = horaryConfig.getNumberDayOfWeek((index - 1) % 7) + 1;

  return (
    dayBlock === horaryConfig.actualDay ||
    dayBlock === horaryConfig.tomorrow ||
    dayBlock === horaryConfig.dayAfterTomorrow
  );
};

const reservationPermissionsEvents = (index: number) => {
  if (isSelectableDay(index)) {
    return props.user
      ? emits('selectBlock', {
          block_id: index,
          day_name: horaryConfig.getDayOfWeek(index),
          date: horaryConfig.getNumberDayOfWeek((index - 1) % 7) + 1,
          time: horaryConfig.getTimeOfBlock(index),
          month: horaryConfig.actualMonth,
          year: horaryConfig.actualYear,
        })
      : notAuthenticated();
  }
};

const isReservated = (index: number) => {
  return props.reservations.find(
    (reservation) => reservation.Bloque_horario_id_bloque === index
  );
};

const pastReservation = (index: number) => {
  const dayBlock = horaryConfig.getNumberDayOfWeek((index - 1) % 7) + 1;

  if (isReservated(index)) return dayBlock < horaryConfig.actualDay;
};
</script>

<template>
  <div class="grid grid-cols-7">
    <div
      v-for="index in 63"
      :key="index"
      class="relative h-[75px] border-b border-r cursor-pointer hover:before:absolute hover:before:top-0 hover:before:left-0 hover:before:w-full hover:before:h-full hover:before:bg-black/20"
      :class="{
        'bg-available': isSelectableDay(index),
        'bg-not-available': !isSelectableDay(index),
        'bg-reserved': isReservated(index),
        'bg-usage-history': pastReservation(index),
      }"
      @click="!isReservated(index) && reservationPermissionsEvents(index)"
    >
      <div
        class="absolute top-1/2 -translate-y-1/2 rotate-12 text-sm opacity-50 w-full text-center font-medium text-white"
      >
        {{
          isReservated(index)
            ? pastReservation(index)
              ? 'Expirado'
              : 'Reservado'
            : ''
        }}
      </div>
    </div>
  </div>
</template>
