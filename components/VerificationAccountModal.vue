<script setup lang="ts">
import type { FormSubmitEvent } from '#ui/types';

const props = defineProps<{
  userEmail: string;
  redirectRoute: string;
}>();
const emits = defineEmits<{
  (e: 'closeModal'): void;
}>();

const store = useUserStore();
const toast = useToast();
const { verifyCodeSchema } = useJoiSchemas();
const { authNotifications } = useToastNotifications();

const verificationCode = ref({
  code: '',
});
const loading = ref(false);
const disabled = ref(false);

const verifyAccount = async (event: FormSubmitEvent<any>) => {
  loading.value = true;
  disabled.value = true;

  const { data, error }: any = await useAsyncData('verify', () =>
    store.verifyAccount(event.data, props.userEmail)
  );

  if (!data.value) {
    loading.value = false;
    disabled.value = false;
    return toast.add(
      authNotifications.error(
        'Error en la verificación',
        error.value.data.message
      )
    );
  }

  emits('closeModal');
  loading.value = false;
  disabled.value = false;
  toast.add(
    authNotifications.success(
      'Cuenta verificada correctamente!',
      'Redirigiendote...',
      props.redirectRoute
    )
  );
};
</script>

<template>
  <div
    class="fixed top-0 left-0 w-full h-full grid place-content-center bg-black/50 px-4 lg:px-0 z-20 animate-modal"
  >
    <UForm
      :state="verificationCode"
      :schema="verifyCodeSchema"
      @submit="verifyAccount"
      class="grid place-content-center p-10 bg-white rounded-xl lg:w-[700px]"
    >
      <div class="text-center">
        <h1 class="text-2xl font-medium">
          Por favor ingresa el código para verificar tu cuenta
        </h1>
        <p class="text-gray-500 mt-4">
          El código ha sido enviado a {{ userEmail }}
        </p>
      </div>

      <UFormGroup class="w-[300px] mx-auto" name="code" required>
        <UInput
          class="mt-10 text-center"
          color="blue"
          type="text"
          v-model="verificationCode.code"
          size="xl"
        />
      </UFormGroup>
      <UButton
        class="bg-royal-blue hover:bg-[#2d4471] transition-colors w-fit mx-auto text-2xl mt-10 px-10"
        type="submit"
        size="xl"
        :loading="loading"
        :disabled="disabled"
        >Validar</UButton
      >
    </UForm>
  </div>
</template>
