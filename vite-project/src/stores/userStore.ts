import { defineStore } from 'pinia';
import { postRequest } from '../utils/api';
import { User } from '../interfaces/User.types';
import { ApiEndpoints } from '../enums/ApiEndpoints';

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
    SUBMIT_USER_EMAIL(
      endpoint: ApiEndpoints,
      userData: User,
      handleSuccess: (data: any) => void,
      handleError: (error: Error) => void
    ) {
      postRequest(
        endpoint,
        userData,
        handleSuccess,
        handleError
      );
    },
    UPDATE_SIGN_UP_STATUS(incomingSignUpStatus: boolean) {
      this.signUpStatusSuccess = incomingSignUpStatus;
    }
  },
});