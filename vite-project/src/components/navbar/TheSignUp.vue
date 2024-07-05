<template>
  <BaseButton @click="showModal = !showModal">
    <template #BaseButtonContent> Sing up </template>
  </BaseButton>
  <BModal v-model="showModal" title="Sign up Form" @ok="userEmailSubmit"
    ><BaseInput
      label="email"
      type="email"
      value=""
      @changedInputValue="updateInputvalue"
    ></BaseInput
  ></BModal>
</template>

<script setup lang="ts">
import BaseButton from "../base/BaseButton.vue";
import BaseInput from "../base/BaseInput.vue";
import { ref } from "vue";

const showModal = ref(false);

const userEmail = ref("");

const updateInputvalue = (newValue: string) => {
  userEmail.value = newValue;
  console.log("UPDATE");
};

const userEmailSubmit = () => {
  const userData = {
    email: userEmail.value
  };

  fetch("https://dummyjson.com/users/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(userData),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      console.log("Success:", data);
      showModal.value = false;
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};
</script>

<style scoped></style>
