import { Request, Response } from 'express';
import * as model from '../models/disciplina';

export const create = async (req: Request, res: Response) => {
  const { name, carga_horaria, professor_id } = req.body;
  if (!name) return res.status(400).json({ message: 'name obrigatório' });
  const d = await model.createDisciplina({ name, carga_horaria: Number(carga_horaria), professor_id });
  res.status(201).json(d);
};

export const list = async (_req: any, res: Response) => {
  const ds = await model.listDisciplinas();
  res.json(ds);
};
