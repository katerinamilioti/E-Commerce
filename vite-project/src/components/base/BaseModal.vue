<template>
    <BModal :title="title" v-model="internalShowModal" @ok="okEmit">
      <slot name="BaseModalContent"></slot>
    </BModal>
</template>

<script setup lang="ts">
import { ref, watch, defineProps, defineEmits } from "vue";

const props = defineProps({
  title: String,
  showModal: Boolean,
});

const internalShowModal = ref(props.showModal);

const emit = defineEmits(["update:showModal", "ok"]);

const okEmit = () => {
  emit("ok");
};

watch(internalShowModal, (newValue) => {
  emit("update:showModal", newValue);
});

watch(
  () => props.showModal,
  (newValue) => {
    internalShowModal.value = newValue;
  }
);
</script>
