<template>
  <div>
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
          <div v-if="GET_SIGN_UP_STATUS">
            <TheUserDropDown></TheUserDropDown>
          </div>
          <div v-else>
            <TheSignUp></TheSignUp>
          </div>
        </BNavbarNav>
      </BCollapse>
    </BNavbar>
    <div class="position-fixed top-0 end-0 p-3" style="z-index: 1050">
      <div v-if="showMessage" :class="['alert', {'alert-success': messageType === 'success', 'alert-danger': messageType === 'error'}]">
        {{ message }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import TheNavigationSearch from "./TheNavigationSearch.vue";
import TheFavorites from "./TheFavorites.vue";
import TheShoppingBag from "./TheShoppingBag.vue";
import TheUserDropDown from "./TheUserDropDown.vue";
import TheSignUp from "./TheSignUp.vue";
import { useUserStore } from '../../../src/stores/userStore';
import { storeToRefs } from 'pinia';

const userStore = useUserStore();
const { GET_SIGN_UP_STATUS } = storeToRefs(userStore);

const message = ref<string>('');
const messageType = ref<string>('');
const showMessage = ref<boolean>(false);

const showMessageBasedOnSignUpStatus = (success: boolean) => {
  showMessage.value = true;
  if (success) {
    message.value = 'Sign up successful!';
    messageType.value = 'success';
  } else {
    message.value = 'Sign up failed.';
    messageType.value = 'error';
  }
  setTimeout(() => {
    showMessage.value = false;
    message.value = '';
    messageType.value = '';
  }, 2000);
};

watch(GET_SIGN_UP_STATUS, (newValue) => {
  showMessageBasedOnSignUpStatus(newValue);
});
</script>

<style scoped>
.alert {
  position: relative; 
  width: 300px;
  margin-top: 2rem;
}

@media screen and (max-width: 575px) {
  .position-fixed {
    width: 100%;
    padding: 0 10px;
  }
}

</style>