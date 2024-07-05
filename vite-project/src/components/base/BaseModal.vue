<template>
  <!-- BaseModal component using BModal -->
  <BModal :title="title" v-model="showModal" @ok="okEmit" centered>
    <slot name="BaseModalContent"></slot>
  </BModal>
</template>

<script setup lang="ts">
  import { ref, watch, defineProps, defineEmits } from "vue";

  const props = defineProps({
    title: String,
    showModal: Boolean,
  });

  const showModal = ref(props.showModal);

  const emit = defineEmits(["changedShowModalValue", "ok"]);

  // Function to emit ok BModal event
  const okEmit = () => {
    emit("ok");
  };

  // Watcher for showModal changes
  watch(showModal, (newValue) => {
    emit("changedShowModalValue", newValue);
  });

  // Watcher for props.showModal changes
  watch(
    () => props.showModal,
    (newValue) => {
      showModal.value = newValue;
    }
  );
</script>
