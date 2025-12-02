import { Router } from "express";
import { createStudent } from "../models/student";

const router = Router();

router.post("/", async (req, res) => {
  try {
    const student = await createStudent(req.body);
    res.status(201).json(student);
  } catch (err) {
    res.status(500).json({ error: "Erro ao cadastrar aluno" });
  }
});

export default router;
