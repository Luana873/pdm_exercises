import  api  from "./axios";

export const listarCursos = () => api.get("/courses");
export const criarCurso = (data: any) => api.post("/courses", data);
export const editarCurso = (id: number, data: any) => api.put(`/courses/${id}`, data);
export const excluirCurso = (id: number) => api.delete(`/courses/${id}`);
