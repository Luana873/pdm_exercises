import { Request, Response } from "express";
import { createCourse, getAllCourses, updateCourse, deleteCourse } from "../models/course";

export const listCourses = async (req: Request, res: Response) => {
  const data = await getAllCourses();
  res.json(data);
};

export const addCourse = async (req: Request, res: Response) => {
  const course = await createCourse(req.body);
  res.status(201).json(course);
};

export const editCourse = async (req: Request, res: Response) => {
  const { id } = req.params;
  const updated = await updateCourse(Number(id), req.body);
  res.json(updated);
};

export const removeCourse = async (req: Request, res: Response) => {
  const { id } = req.params;
  await deleteCourse(Number(id));
  res.json({ message: "Curso removido com sucesso!" });
};
