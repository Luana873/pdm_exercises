import { pool } from '../config/db';

export interface User {
  id?: number;
  name: string;
  email: string;
  password: string;
  role: string; // admin | professor | aluno
}

export const findUserByEmail = async (email: string): Promise<User | null> => {
  const r = await pool.query('SELECT id, name, email, password, role FROM users WHERE email=$1', [email]);
  return r.rows[0] || null;
};

export const createUser = async (u: User) => {
  const r = await pool.query(
    'INSERT INTO users (name,email,password,role) VALUES ($1,$2,$3,$4) RETURNING id,name,email,role',
    [u.name, u.email, u.password, u.role]
  );
  return r.rows[0];
};

export const listUsers = async () => {
  const r = await pool.query('SELECT id,name,email,role FROM users ORDER BY name');
  return r.rows;
};
