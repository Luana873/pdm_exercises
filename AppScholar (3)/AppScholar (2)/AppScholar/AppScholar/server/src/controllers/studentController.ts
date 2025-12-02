import { Request, Response } from 'express';
import * as model from '../models/student';

export const create = async (req: Request, res: Response) => {
  const { name, enrollment, course } = req.body;
  if (!name || !enrollment) return res.status(400).json({ message: 'name e enrollment obrigatórios' });
  const s = await model.createStudent({ name, enrollment, course });
  res.status(201).json(s);
};

export const list = async (_req: any, res: Response) => {
  const students = await model.getAllStudents();
  res.json(students);
};

export const getById = async (req: Request, res: Response) => {
  const s = await model.getStudentById(Number(req.params.id));
  if (!s) return res.status(404).json({ message: 'Aluno não encontrado' });
  res.json(s);
};

export const update = async (req: Request, res: Response) => {
  const s = await model.updateStudent(Number(req.params.id), req.body);
  res.json(s);
};

export const remove = async (req: Request, res: Response) => {
  await model.deleteStudent(Number(req.params.id));
  res.status(204).send();
};
