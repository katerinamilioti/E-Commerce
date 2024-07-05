import { defineStore } from "pinia";
import { postRequest } from "../utils/api";
import { User } from "../interfaces/User.types";
import { ApiEndpoints } from "../enums/ApiEndpoints";

export const useUserStore = defineStore("userStore", {
  state: () => ({
    userEmail: "", // The user's email
    signUpStatusSuccess: false, // Status of the sign-up process
  }),
  getters: {
    /**
     * Gets the user's email
     * @param state - The current state
     * @returns The user's email
     */
    GET_USER_EMAIL: (state) => state.userEmail,
    /**
     * Gets the sign-up status
     * @param state - The current
     * @returns The sign-up status
     */
    GET_SIGN_UP_STATUS: (state) => state.signUpStatusSuccess,
  },
  actions: {
    /**
     * Updates the user's email in the store
     * @param newEmail - The new email to be set
     */
    UPDATE_USER_EMAIL(newEmail: string) {
      this.userEmail = newEmail;
    },
    /**
     * Submits the user's email to the specified API endpoint
     * @param endpoint - The API endpoint to send the request to
     * @param  userData - The user data to send in the request body
     * @param handleSuccess - Callback function to handle success
     * @param handleError - Callback function to handle failure
     */
    SUBMIT_USER_EMAIL(
      endpoint: ApiEndpoints,
      userData: User,
      handleSuccess: (data: any) => void,
      handleError: (error: Error) => void
    ) {
      postRequest(endpoint, userData, handleSuccess, handleError);
    },
    /**
     * Updates the sign-up status
     * @param incomingSignUpStatus - The new sign-up status to be set
     */
    UPDATE_SIGN_UP_STATUS(incomingSignUpStatus: boolean) {
      this.signUpStatusSuccess = incomingSignUpStatus;
    },
  },
});
