import api from "./axios";

export const getBoletim = async () => {
  const response = await api.get("/grades");
  return response.data;
};
