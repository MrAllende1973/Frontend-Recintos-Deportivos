<script setup lang="ts">
import type { FormSubmitEvent } from '#ui/types';
import type { User, Block, APIReservation } from '~/types';

const props = defineProps<{
  user: User | null;
  enclosureId: number;
  block: Block;
}>();

const emits = defineEmits<{
  (e: 'closeModal'): void;
  (e: 'updateReservations', reservation: APIReservation): void;
}>();

const toast = useToast();
const store = useResevationStore();
const { reservationNotifications } = useToastNotifications();
const { actualWeek, startOfWeek, endOfWeek } = useHoraryConfig();
const { createReservationSchema } = useJoiSchemas();

const loading = ref(false);
const disabled = ref(false);
const state = ref({
  activity: '',
  numberMen: 0,
  numberWomen: 0,
});
const activities = ['Partido Completo', 'Partido Mixto', 'Media Cancha'];

const userFullName = computed(() => {
  return props.user?.names + ' ' + props.user?.surnames;
});
const dateOfSelectedBlock = computed(() => {
  return `${props.block.day_name} ${props.block.date}, ${props.block.month} ${props.block.year}`;
});

const onSubmit = async (event: FormSubmitEvent<any>) => {
  loading.value = true;
  disabled.value = true;

  const values = {
    user_id: props.user?.id,
    week_id: actualWeek,
    enclosure_id: props.enclosureId,
    block_id: props.block.block_id,
    month: props.block.month,
    year: props.block.year,
    career: props.user?.career,
    startDate: startOfWeek,
    endDate: endOfWeek,
    ...event.data,
  };

  const { data, error }: any = await useAsyncData('reservation', () =>
    store.addReservation(values)
  );

  if (!data.value) {
    loading.value = false;
    return toast.add(
      reservationNotifications.error(
        'Error al solicitar reserva',
        error.value.message
      )
    );
  }

  emits('closeModal');
  emits('updateReservations', data.value.data);
  loading.value = false;
  toast.add(
    reservationNotifications.success(
      'Solicitud Exitosa!',
      'Tu reserva se ha realizado correctamente.'
    )
  );
};
</script>

<template>
  <UForm
    class="space-y-4"
    :schema="createReservationSchema"
    :state="state"
    @submit="onSubmit"
  >
    <div class="flex flex-col md:flex-row md:items-center justify-between">
      <h1 class="text-xl">Solicitar Reserva</h1>
      <div class="flex flex-col md:items-end">
        <span>{{ dateOfSelectedBlock }}</span>
        <span>{{ block.time }}</span>
      </div>
    </div>
    <UFormGroup label="Rut" name="rut">
      <UInput :value="user?.rut" readonly color="blue" size="lg" />
    </UFormGroup>

    <UFormGroup label="Nombre" name="names">
      <UInput :value="userFullName" readonly color="blue" size="lg" />
    </UFormGroup>

    <UFormGroup label="Carrera" name="careers">
      <UInput :value="props.user?.career" color="blue" size="lg" />
    </UFormGroup>

    <UFormGroup label="Actividad" name="activity">
      <USelect
        v-model="state.activity"
        :options="activities"
        color="blue"
        size="lg"
      />
    </UFormGroup>

    <div class="grid grid-cols-2 gap-x-4">
      <UFormGroup label="N° Hombres" name="numberMen">
        <UInput
          v-model="state.numberMen"
          color="blue"
          size="lg"
          type="number"
          :min="0"
        />
      </UFormGroup>
      <UFormGroup label="N° Mujeres" name="numberWomen">
        <UInput
          v-model="state.numberWomen"
          color="blue"
          size="lg"
          type="number"
          :min="0"
        />
      </UFormGroup>
    </div>

    <div class="flex justify-end gap-x-2">
      <UButton
        class="transition-colors"
        type="button"
        color="red"
        @click="emits('closeModal')"
      >
        Cancelar
      </UButton>
      <UButton
        class="bg-royal-blue hover:bg-[#2d4471] transition-colors"
        type="submit"
        :loading="loading"
        :disabled="disabled"
      >
        Confirmar
      </UButton>
    </div>
  </UForm>
</template>
