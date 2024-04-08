<script setup lang="ts">
import type { FormSubmitEvent } from '#ui/types';

const emits = defineEmits<{
  (e: 'openModal', value: boolean): void;
  (e: 'sendUserEmail', value: string): void;
}>();

const store = useUserStore();
const toast = useToast();
const { loginSchema } = useJoiSchemas();
const { authNotifications } = useToastNotifications();

const user = ref({
  email: 'alan.ortega.garcia@alumnos.uta.cl',
  password: '123123123',
});
const environments = ref({
  student: true,
  admin: false,
});
const loading = ref(false);
const disabled = ref(false);

const toggleEnvironments = (role: string) => {
  environments.value.admin = role === 'admin';
  environments.value.student = role === 'student';
};

const onSubmit = async (event: FormSubmitEvent<any>) => {
  loading.value = true;
  disabled.value = true;

  const { data, error }: any = await useAsyncData('login', () =>
    store.login(event.data, environments.value)
  );

  if (!data.value) {
    loading.value = false;
    disabled.value = false;

    if (error.value.data.data) {
      if (!error.value.data.Estado_verificacion) {
        emits('sendUserEmail', user.value.email);
        return emits('openModal', true);
      }
    }
    return toast.add(
      authNotifications.error('Error en la autenticación', error.value.data.message)
    );
  }

  loading.value = false;
  store.saveUser(data.value.data);
  toast.add(
    authNotifications.success('Inicio de sesión exitoso!', 'Redirigiendote...', '/')
  );
};
</script>

<template>
  <UForm
    class="grid grid-cols-1 place-content-center px-6 space-y-4 h-full"
    :state="user"
    :schema="loginSchema"
    @submit="onSubmit"
  >
    <div class="flex flex-col items-center">
      <UIcon class="text-9xl" name="i-heroicons-user-circle" />
      <h1 class="text-2xl">Iniciar Sesión</h1>
    </div>

    <div class="flex justify-center items-center gap-x-4">
      <UCheckbox
        v-model="environments.student"
        name="student"
        label="Estudiante"
        :value="'on'"
        :checked="true"
        @change="toggleEnvironments('student')"
        :color="'gray'"
      />
      <UCheckbox
        v-model="environments.admin"
        name="admin"
        label="Administrador"
        :checked="false"
        :value="'off'"
        @change="toggleEnvironments('admin')"
        :color="'gray'"
      />
    </div>

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
      :disabled="disabled"
      >Ingresar</UButton
    >

    <UDivider></UDivider>

    <div class="text-sm text-center">
      <h3>¿Aún no eres parte de nuestra comunidad?</h3>
      <NuxtLink
        class="text-red-orange hover:text-red-orange/80 font-semibold"
        to="/register"
        >Registrate Aquí</NuxtLink
      >
    </div>
  </UForm>
</template>
