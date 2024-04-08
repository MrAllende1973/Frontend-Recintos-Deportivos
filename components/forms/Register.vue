<script setup lang="ts">
import type { FormSubmitEvent, FormErrorEvent } from '#ui/types';

const emits = defineEmits<{
  (e: 'openModal'): void;
  (e: 'sendUserEmail', value: string): void;
}>();

const store = useUserStore();
const toast = useToast();
const { registerSchema } = useJoiSchemas();
const { authNotifications } = useToastNotifications();

const user = ref({
  rut: '20.215.252-K',
  names: 'Alan Marcelo',
  surnames: 'Ortega García',
  date_of_birth: '1999-06-21',
  genre: 'Masculino',
  career: 'Ingeniería Civil en Computación e Informática',
  email: 'alan.ortega.garcia@alumnos.uta.cl',
  password: '123123123',
});
const { careers } = useUtils();
const genres = ['Masculino', 'Femenino', 'Otros'];
const loading = ref(false);
const disabled = ref(false);

const onSubmit = async (event: FormSubmitEvent<any>) => {
  loading.value = true;
  disabled.value = true;

  const { data, error }: any = await useAsyncData('register', () =>
    store.register(event.data)
  );

  if (!data.value) {
    loading.value = false;
    disabled.value = false;

    return toast.add(
      authNotifications.error('Error en el registro', error.value.data.message)
    );
  }

  emits('openModal');
  emits('sendUserEmail', user.value.email);
  loading.value = false;
};

const onError = (event: FormErrorEvent) => {
  const element = document.getElementById(event.errors[0].id);
  element?.focus();
};
</script>

<template>
  <UForm
    class="py-10 px-4 space-y-4"
    :state="user"
    :schema="registerSchema"
    @submit="onSubmit"
    @error="onError"
  >
    <div class="flex flex-col items-center">
      <UIcon class="text-9xl" name="i-heroicons-user-circle" />
      <h1 class="text-2xl">Registrarse</h1>
    </div>

    <UFormGroup label="Rut" name="rut" required>
      <UInput color="blue" type="text" v-model="user.rut" size="lg" />
    </UFormGroup>

    <UFormGroup label="Nombres" name="names" required>
      <UInput color="blue" type="text" v-model="user.names" size="lg" />
    </UFormGroup>

    <UFormGroup label="Apellidos" name="surnames" required>
      <UInput color="blue" type="text" v-model="user.surnames" size="lg" />
    </UFormGroup>

    <UFormGroup label="Fecha Nacimiento" name="dateOfBirth" required>
      <UInput color="blue" type="date" v-model="user.date_of_birth" size="lg" />
    </UFormGroup>

    <UFormGroup label="Género" name="genre" required>
      <USelectMenu
        v-model="user.genre"
        :options="genres"
        :placeholder="'Selecciona un género'"
        color="blue"
        size="lg"
      />
    </UFormGroup>

    <UFormGroup label="Carrera" name="career" required>
      <USelectMenu
        v-model="user.career"
        :options="careers"
        :placeholder="'Selecciona una carrera'"
        color="blue"
        size="lg"
      />
    </UFormGroup>
    <UFormGroup label="Correo Electrónico" name="email" required>
      <UInput color="blue" type="email" v-model.trim="user.email" size="lg" />
    </UFormGroup>

    <UFormGroup label="Contraseña" name="password" required>
      <UInput
        color="blue"
        type="password"
        v-model.trim="user.password"
        size="lg"
      />
    </UFormGroup>

    <UButton
      class="flex items-center justify-center w-full bg-royal-blue hover:bg-royal-blue/95 py-3 rounded-full text-base"
      type="submit"
      :loading="loading"
      :disabled="loading"
      >Registrarme</UButton
    >

    <UDivider></UDivider>

    <div class="text-sm text-center">
      <h3>¿Ya eres parte de nuestra comunidad?</h3>
      <NuxtLink
        class="text-red-orange hover:text-red-orange/80 font-semibold"
        to="/login"
        >Ingresa Aquí</NuxtLink
      >
    </div>
  </UForm>
</template>
