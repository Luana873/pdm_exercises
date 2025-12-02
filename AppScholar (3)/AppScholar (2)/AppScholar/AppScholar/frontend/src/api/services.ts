import api from './axios';

/* ============================
   AUTH (se não estiver usando, ignore)
============================ */
export const loginApi = (email: string, password: string) =>
  api.post('/login', { email, password });

export const registerApi = (payload: any) =>
  api.post('/register', payload);

export const listUsersApi = () =>
  api.get('/users');

/* ============================
   STUDENTS
============================ */
export const cadastrarAlunoApi = (payload: any) =>
  api.post('/students', payload);

export const listarAlunosApi = () =>
  api.get('/students');

export const getAlunoApi = (id: number) =>
  api.get(`/students/${id}`);

/* ============================
   PROFESSORES
============================ */
// SE SUA ROTA É /api/professores (como no backend)
export const listarProfessoresApi = () =>
  api.get('/professores');

export const cadastrarProfessorApi = (payload: any) =>
  api.post('/professores', payload);

/* ============================
   DISCIPLINAS
============================ */
export const listarDisciplinasApi = () =>
  api.get('/disciplinas');

export const cadastrarDisciplinaApi = (payload: any) =>
  api.post('/disciplinas', payload);

/* ============================
   GRADES / BOLETIM
============================ */
export const adicionarNotaApi = (payload: any) =>
  api.post('/grades', payload);

export const boletimAlunoApi = (studentId: number) =>
  api.get(`/grades/student/${studentId}`);
