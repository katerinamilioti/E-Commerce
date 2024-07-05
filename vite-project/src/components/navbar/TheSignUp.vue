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
  import BaseButton from "../base/BaseButton.vue";
  import BaseInput from "../base/BaseInput.vue";
  import BaseModal from "../base/BaseModal.vue";
  import { useUserStore } from "../../../src/stores/userStore";
  import { User } from "../../../src/interfaces/User.types";
  import { ApiEndpoints } from "../../../src/enums/ApiEndpoints";
  import { ref } from "vue";

  const showModal = ref(false);
  const userStore = useUserStore();
  const userEmail = ref("");

  const updateInputValue = (newInputValue: any) => {
    userEmail.value = newInputValue;
  };

  // Function executed on successful user email submission
  const handleSuccess = () => {
    userStore.UPDATE_USER_EMAIL(userEmail.value);
    userStore.UPDATE_SIGN_UP_STATUS(true);
    showModal.value = false;
  };

  // Function executed on error during user email submission
  const handleError = () => {
    userStore.UPDATE_SIGN_UP_STATUS(false);
  };

  // Function to handle user email submission
  const userEmailSubmit = () => {
    const userData: User = { email: userEmail.value };
    userStore.SUBMIT_USER_EMAIL(
      ApiEndpoints.AddUser,
      userData,
      handleSuccess,
      handleError
    );
  };
</script>
