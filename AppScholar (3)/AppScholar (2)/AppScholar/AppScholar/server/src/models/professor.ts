import { pool } from '../config/db';

export interface Professor { id?: number; name: string; titulacao?: string; tempo_docencia?: number; }

export const createProfessor = async (p: Professor) => {
  const r = await pool.query('INSERT INTO professores (name,titulacao,tempo_docencia) VALUES ($1,$2,$3) RETURNING *', [p.name, p.titulacao, p.tempo_docencia]);
  return r.rows[0];
};

export const listProfessors = async () => {
  const r = await pool.query('SELECT * FROM professores ORDER BY name');
  return r.rows;
};
