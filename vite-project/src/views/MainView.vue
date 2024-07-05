<template>
  <TheNavigationBar></TheNavigationBar>
  <TheSliderBanner></TheSliderBanner>
  <div class="center-content">
    <CallToActionSection></CallToActionSection>
  </div>
</template>

<script setup lang="ts">
    import TheNavigationBar from "../components/navbar/TheNavigationBar.vue";
    import TheSliderBanner from "../components/TheSliderBanner.vue";
    import CallToActionSection from "../components/CallToActionSection.vue"
</script>

<style scoped>
  .center-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
</style>
