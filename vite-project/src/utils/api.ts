export const postRequest = async (
    url: string,
    data: any,
    onSuccess: (data: any) => void,
    onFailure: (error: Error) => void
  ) => {
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const responseData = await response.json();
      onSuccess(responseData);
    } catch (error) {
      onFailure(error);
    }
};