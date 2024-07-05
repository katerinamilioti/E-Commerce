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
import { useUserStore } from '../../../src/stores/userStore';
import { User } from '../../../src/interfaces/User.types';
import { ApiEndpoints } from '../../../src/enums/ApiEndpoints';

const showModal = ref(false);
const userStore = useUserStore();
const userEmail = ref("");

const updateInputValue = (newValue: string) => {
  userEmail.value = newValue;
  console.log('UPDATE');
};

const handleSuccess = (data: any) => {
  console.log('Success:', data);
  userStore.UPDATE_USER_EMAIL(userEmail.value); 
  userStore.UPDATE_SIGN_UP_STATUS(true); 
  showModal.value = false;
};


const handleError = (error: Error) => {
  console.error('Error:', error);
  userStore.UPDATE_SIGN_UP_STATUS(false);
};
const userEmailSubmit = () => {
  const userData: User = { email: userEmail.value };
  userStore.SUBMIT_USER_EMAIL(ApiEndpoints.AddUser, userData, handleSuccess, handleError);
};
</script>

<style scoped></style>