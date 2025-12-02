import { Request, Response } from 'express';
import { findUserByEmail, createUser, listUsers } from '../models/user';
import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';
import * as dotenv from "dotenv";
dotenv.config();
const JWT_SECRET = process.env.JWT_SECRET || 'changeme';

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const user = await findUserByEmail(email);
  if (!user) return res.status(401).json({ message: 'Usuário ou senha inválidos' });
  const match = await bcrypt.compare(password, user.password);
  if (!match) return res.status(401).json({ message: 'Usuário ou senha inválidos' });
  const token = jwt.sign({ id: user.id, role: user.role, name: user.name }, JWT_SECRET, { expiresIn: '8h' });
  res.json({ token, user: { id: user.id, name: user.name, email: user.email, role: user.role } });
};

export const register = async (req: Request, res: Response) => {
  const { name, email, password, role } = req.body;
  const existing = await findUserByEmail(email);
  if (existing) return res.status(400).json({ message: 'Usuário já existe' });
  const hashed = await bcrypt.hash(password, 10);
  const u = await createUser({ name, email, password: hashed, role });
  res.status(201).json(u);
};

export const getUsers = async (_req: Request, res: Response) => {
  const users = await listUsers();
  res.json(users);
};
