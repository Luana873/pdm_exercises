import { Request, Response } from 'express';
import * as model from '../models/grades';

export const add = async (req: Request, res: Response) => {
  const { student_id, disciplina_id, nota } = req.body;
  if (!student_id || !disciplina_id || nota == null) return res.status(400).json({ message: 'student_id, disciplina_id e nota obrigatórios' });
  const g = await model.addGrade(Number(student_id), Number(disciplina_id), Number(nota));
  res.status(201).json(g);
};

export const boletimByStudent = async (req: Request, res: Response) => {
  const studentId = Number(req.params.studentId || req.params.id);
  const rows = await model.getGradesByStudent(studentId);
  if (!rows || rows.length === 0) return res.status(404).json({ message: 'Aluno não encontrado ou sem notas' });
  res.json({ aluno: rows[0].student_name, disciplinas: rows });
};

export const list = async (_req: any, res: Response) => {
  const rows = await model.listGrades();
  res.json(rows);
};
