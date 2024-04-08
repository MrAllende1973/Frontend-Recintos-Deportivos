<script setup lang="ts">
definePageMeta({
  layout: 'auth',
});

const userEmail = ref('');
const isOpenModal = ref(false);

const setUserEmail = (email: string) => {
  userEmail.value = email;
};
</script>

<template>
  <div class="h-full">
    <FormsLogin
      @open-modal="isOpenModal = true"
      @send-user-email="(value) => setUserEmail(value)"
    />
    <VerificationAccountModal
      v-if="isOpenModal"
      :user-email="userEmail"
      @close-modal="isOpenModal = false"
      :redirect-route="'/'"
    />
  </div>
</template>
