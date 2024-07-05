import { defineStore } from 'pinia';
import { postRequest } from '../utils/api';

export const useUserStore = defineStore('userStore', {
  state: () => ({
    userEmail: '',
    signUpStatusSuccess: false,
  }),
  getters: {
    GET_USER_EMAIL: (state) => state.userEmail,
    GET_SIGN_UP_STATUS: (state) => state.signUpStatusSuccess,
  },
  actions: {
    UPDATE_USER_EMAIL(newEmail: string) {
      this.userEmail = newEmail;
    },
    SUBMIT_USER_EMAIL() {
      const userData = { email: this.userEmail };

      postRequest(
        'https://dummyjson.com/users/add',
        userData,
        (data) => {
          console.log('Success:', data);
          this.signUpStatusSuccess = true;
          this.UPDATE_USER_EMAIL(this.userEmail); // Update userEmail in store on success
        },
        (error) => {
          this.signUpStatusSuccess = false;
          console.error('Error:', error);
        }
      );
    },
    UPDATE_SIGN_UP_STATUS(incomingSignUpStatus: boolean) {
      this.signUpStatusSuccess = incomingSignUpStatus;
    }
  },
});