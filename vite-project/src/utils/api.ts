import { ApiEndpoints } from "../enums/ApiEndpoints";

/**
 * Makes a POST request to the specified endpoint with the given data
 *
 * @param endpoint - The API endpoint to send the request to
 * @param data - The data to send in the request body
 * @param onSuccess - Callback function to handle success
 * @param onFailure - Callback function to handle failure
 */
export const postRequest = async (
  endpoint: ApiEndpoints,
  data: any,
  onSuccess: (data: any) => void,
  onFailure: (error: Error) => void
) => {
  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    // status code is not in the 200-299 range
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const responseData = await response.json();

    onSuccess(responseData);
  } catch (error) {
    if (error instanceof Error) {
      onFailure(error);
    } else {
      onFailure(new Error("An unknown error occurred"));
    }
  }
};
