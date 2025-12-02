import { Request, Response } from 'express';
import * as model from '../models/professor';

export const create = async (req: Request, res: Response) => {
  const { name, titulacao, tempo_docencia } = req.body;
  if (!name) return res.status(400).json({ message: 'name obrigatório' });
  const p = await model.createProfessor({ name, titulacao, tempo_docencia });
  res.status(201).json(p);
};

export const list = async (_req: any, res: Response) => {
  const ps = await model.listProfessors();
  res.json(ps);
};
