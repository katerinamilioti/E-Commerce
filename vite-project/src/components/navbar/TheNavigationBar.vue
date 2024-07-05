<template>
  <BNavbar toggleable="lg" variant="primary" v-b-color-mode="'dark'">
    <BNavbarBrand href="#">LOGO</BNavbarBrand>
    <BNavbarToggle target="nav-collapse" />
    <BCollapse id="nav-collapse" is-nav>
      <BNavbarNav>
        <BNavItem href="#">New & Featured</BNavItem>
        <BNavItem href="#">Men</BNavItem>
        <BNavItem href="#">Women</BNavItem>
        <BNavItem href="#">Kids</BNavItem>
        <BNavItem href="#">Sales</BNavItem>
      </BNavbarNav>
      <BNavForm class="d-flex nav-search-position">
        <TheNavigationSearch></TheNavigationSearch>
      </BNavForm>
      <BNavbarNav class="ms-auto mb-2 mb-lg-0">
        <TheFavorites></TheFavorites>
        <TheShoppingBag></TheShoppingBag>
        <div v-if="isSignUpSuccess">
          <TheUserDropDown></TheUserDropDown>
          <BToast v-model="isActive" variant="info">
            <template #title> Title </template>
            Correct Registration!
          </BToast>
        </div>
        <div v-else>
          <TheSignUp></TheSignUp>
        </div>
      </BNavbarNav>
    </BCollapse>
  </BNavbar>
</template>

<script setup lang="ts">
import TheNavigationSearch from "./TheNavigationSearch.vue";
import TheFavorites from "./TheFavorites.vue";
import TheShoppingBag from "./TheShoppingBag.vue";
import TheUserDropDown from "./TheUserDropDown.vue";
import TheSignUp from "./TheSignUp.vue";
import { ref } from "vue";

const isSignUpSuccess = ref(false);
const isActive = ref(false);
</script>

<style scoped>
@media screen and (min-width: 992px) {
  :deep(.nav-search-position) {
    margin-left: 3rem;
  }
}
</style>
