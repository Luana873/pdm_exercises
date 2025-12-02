import { pool } from '../config/db';

export interface Disciplina { id?: number; name: string; carga_horaria?: number; professor_id?: number; }

export const createDisciplina = async (d: Disciplina) => {
  const r = await pool.query('INSERT INTO disciplinas (name,carga_horaria,professor_id) VALUES ($1,$2,$3) RETURNING *', [d.name, d.carga_horaria, d.professor_id]);
  return r.rows[0];
};

export const listDisciplinas = async () => {
  const r = await pool.query('SELECT d.*, p.name as professor_name FROM disciplinas d LEFT JOIN professores p ON p.id = d.professor_id ORDER BY d.name');
  return r.rows;
};
