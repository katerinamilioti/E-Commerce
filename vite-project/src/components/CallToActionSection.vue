<template>
  <h1>Discover the Latest Trends in Footwear!</h1>
  <h4>Explore our curated collection of shoes for every occasion.</h4>
  <div class="button-container">
    <BaseButton>
      <template #BaseButtonContent> Shop Best Sellers </template>
    </BaseButton>
    <BaseButton>
      <template #BaseButtonContent> See New Arrivals </template>
    </BaseButton>
  </div>
</template>

<script setup lang="ts">
  import BaseButton from "../components/base/BaseButton.vue";
</script>

<style scoped>
  .button-container {
    display: flex;
    justify-content: center;
    gap: 16px;
    padding-bottom: 2rem;
  }
</style>
