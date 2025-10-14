export const formatResponse = (success, data, error = null) => ({
  success,
  data,
  error,
  timestamp: new Date().toISOString(),
});
