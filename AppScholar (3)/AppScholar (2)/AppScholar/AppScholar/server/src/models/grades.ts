import { pool } from '../config/db';

export const addGrade = async (student_id: number, disciplina_id: number, nota: number) => {
  const r = await pool.query('INSERT INTO grades (student_id,disciplina_id,nota) VALUES ($1,$2,$3) RETURNING *', [student_id, disciplina_id, nota]);
  return r.rows[0];
};

export const getGradesByStudent = async (student_id: number) => {
  const r = await pool.query(`
    SELECT s.name as student_name, d.id as disciplina_id, d.name as disciplina, g.nota
    FROM grades g
    JOIN students s ON s.id = g.student_id
    JOIN disciplinas d ON d.id = g.disciplina_id
    WHERE g.student_id = $1
  `, [student_id]);
  return r.rows;
};

export const listGrades = async () => {
  const r = await pool.query('SELECT * FROM grades ORDER BY id');
  return r.rows;
};
