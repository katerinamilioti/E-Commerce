<template>
  <div>
    <BNavbar toggleable="lg" variant="primary" v-b-color-mode="'dark'">
      <!-- Logo -->
      <BNavbarBrand href="#">BESTSHOES</BNavbarBrand>
      <!-- Toggle button for mobile -->
      <BNavbarToggle target="nav-collapse" />
      <BCollapse id="nav-collapse" is-nav>
        <!-- Navigation links -->
        <BNavbarNav>
          <BNavItem href="#">New & Featured</BNavItem>
          <BNavItem href="#">Men</BNavItem>
          <BNavItem href="#">Women</BNavItem>
          <BNavItem href="#">Kids</BNavItem>
          <BNavItem href="#">Sales</BNavItem>
        </BNavbarNav>
        <!-- Navigation Search -->
        <BNavForm class="d-flex nav-search-position">
          <TheNavigationSearch></TheNavigationSearch>
        </BNavForm>
        <BNavbarNav class="ms-auto mb-2 mb-lg-0">
          <!-- Favorites and Shopping bag icosn -->
          <TheFavorites></TheFavorites>
          <TheShoppingBag></TheShoppingBag>
          <!-- Conditionally render the User dropdown or the Sign up button based on sign-up status -->
          <div v-if="GET_SIGN_UP_STATUS">
            <TheUserDropDown></TheUserDropDown>
          </div>
          <div v-else>
            <TheSignUp></TheSignUp>
          </div>
        </BNavbarNav>
      </BCollapse>
    </BNavbar>
    <div class="alert-position">
      <!-- Alert message displayed conditionally -->
      <div
        v-if="showMessage"
        :class="[
          'alert',
          {
            'alert-success': messageType === 'success',
            'alert-danger': messageType === 'error',
          },
        ]"
      >
        {{ message }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref, watch } from "vue";
  import TheNavigationSearch from "./TheNavigationSearch.vue";
  import TheFavorites from "./TheFavorites.vue";
  import TheShoppingBag from "./TheShoppingBag.vue";
  import TheUserDropDown from "./TheUserDropDown.vue";
  import TheSignUp from "./TheSignUp.vue";
  import { useUserStore } from "../../../src/stores/userStore";
  import { storeToRefs } from "pinia";

  const userStore = useUserStore();
  const { GET_SIGN_UP_STATUS } = storeToRefs(userStore);

  const message = ref<string>("");
  const messageType = ref<string>("");
  const showMessage = ref<boolean>(false);

  // Function to show message based on sign-up status
  const showMessageBasedOnSignUpStatus = (success: boolean) => {
    showMessage.value = true;
    if (success) {
      message.value = "Sign up successful!";
      messageType.value = "success";
    } else {
      message.value = "Sign up failed.";
      messageType.value = "error";
    }
    setTimeout(() => {
      showMessage.value = false;
      message.value = "";
      messageType.value = "";
    }, 2000);
  };

  // Watch for changes in sign-up status
  watch(GET_SIGN_UP_STATUS, (newValue) => {
    showMessageBasedOnSignUpStatus(newValue);
  });
</script>

<style scoped>
  .alert {
    position: relative;
    margin-top: 3.5rem;
    width: fit-content;
  }
  .alert-position {
    position: fixed;
    padding: 0 10px;
    z-index: 1;
    right: 0;
    top: 0;
  }
</style>