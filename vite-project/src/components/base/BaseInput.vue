<template>
    <!-- BaseInput component using BInput -->
    <label>{{ props.label }}</label>
    <BFormInput :type="props.type" v-model="inputValue"/>
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
  
  // Watch for changes in inputValue and emit custom event when it changes
  watch(inputValue, (newValue) => {
    emit('changedInputValue', newValue);
  });
</script>