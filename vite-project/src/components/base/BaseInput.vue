<template>
    <label>{{ props.label }}</label>
    <BFormInput :id="`type-${props.type}`" :type="props.type" v-model="inputValue"/>
  </template>
  
  <script setup lang="ts">
  import { ref, watch, defineProps, defineEmits } from 'vue';
  
  const props = defineProps({
    label: String,
    type: String,
    value: String
  });
  
  const emit = defineEmits(['changedInputValue']);
  
  const inputValue = ref(props.value);
  
  watch(inputValue, (newValue) => {
    emit('changedInputValue', newValue);
  });
  </script>
  
<style scoped></style>