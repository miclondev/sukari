const useHandleError = () => {
  const handleErrors = (
    response: any,
    errorMessage = "an Error happened, please contact support@slyte.io"
  ) => {
    if (response?.errors && response?.errors.length > 0) {
      console.log({ response });
      const errors = response.errors.map((error: any) => error.message);
      return errors;
    }
    return null;
  };

  return {
    handleErrors,
  };
};

export default useHandleError;
