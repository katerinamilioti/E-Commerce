<template>
  <BaseButton @click="showModal = !showModal">
    <template #BaseButtonContent> Sign up </template>
  </BaseButton>
  <BaseModal
    :show-modal="showModal"
    @update:showModal="(newVal: boolean) => (showModal = newVal)"
    title="Sign up Form"
    @ok="userEmailSubmit"
  >
    <template #BaseModalContent>
      <BaseInput
        label="email"
        type="email"
        :value="userEmail"
        @changedInputValue="updateInputValue"
      ></BaseInput>
    </template>
  </BaseModal>
</template>

<script setup lang="ts">
import BaseButton from '../base/BaseButton.vue';
import BaseInput from '../base/BaseInput.vue';
import BaseModal from '../base/BaseModal.vue';
import { ref } from 'vue';
import { useUserStore } from '../../../src/stores/userStore.ts';

const showModal = ref(false);
const userStore = useUserStore();
const userEmail = ref("");

const updateInputValue = (newValue: string) => {
  userEmail.value = newValue;
  console.log('UPDATE');
};

const userEmailSubmit = () => {
  userStore.SUBMIT_USER_EMAIL();
  showModal.value = false;
};
</script>

<style scoped></style>