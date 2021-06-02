export const getClientDetails = async (clientApiKey) => {
  if (clientApiKey === process.env.AUTH_API_KEY) {
    return clientApiKey;
  } else {
    return false;
  }
};
