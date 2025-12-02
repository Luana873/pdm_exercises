import { pool } from '../config/db';

export interface Student { id?: number; name: string; enrollment: string; course: string; }

export const createStudent = async (s: Student) => {
  const r = await pool.query('INSERT INTO students (name,enrollment,course) VALUES ($1,$2,$3) RETURNING *', [s.name, s.enrollment, s.course]);
  return r.rows[0];
};

export const getAllStudents = async () => {
  const r = await pool.query('SELECT * FROM students ORDER BY name');
  return r.rows;
};

export const getStudentById = async (id: number) => {
  const r = await pool.query('SELECT * FROM students WHERE id=$1', [id]);
  return r.rows[0] || null;
};

export const updateStudent = async (id: number, s: Partial<Student>) => {
  const r = await pool.query('UPDATE students SET name=$1, enrollment=$2, course=$3 WHERE id=$4 RETURNING *',
    [s.name, s.enrollment, s.course, id]);
  return r.rows[0];
};

export const deleteStudent = async (id: number) => {
  await pool.query('DELETE FROM students WHERE id=$1', [id]);
  return;
};
