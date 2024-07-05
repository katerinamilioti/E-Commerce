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
        <TheUserDropDown></TheUserDropDown>
      </BNavbarNav>
    </BCollapse>
  </BNavbar>
</template>

<script setup lang="ts">
  import TheNavigationSearch from "./TheNavigationSearch.vue";
  import TheFavorites from "./TheFavorites.vue";
  import TheShoppingBag from "./TheShoppingBag.vue";
  import TheUserDropDown from "./TheUserDropDown.vue";
</script>

<style scoped>
  @media screen and (min-width: 992px) {
    :deep(.nav-search-position) {
      margin-left: 3rem;
    }
  }
</style>
