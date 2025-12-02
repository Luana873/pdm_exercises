import axios from "axios";

const API_URL = "http://localhost:3001/api";

export async function cadastrarAluno(data: any) {
  return axios.post(`${API_URL}/students`, data);
}
