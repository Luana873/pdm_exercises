import { Router, Request, Response } from "express";
import { pool } from "../config/db";

const router = Router();

// Retorna boletim de um aluno
router.get("/:studentId", async (req: Request, res: Response) => {
  const { studentId } = req.params;

  try {
    const boletim = await pool.query(
      `SELECT s.name as student_name, d.name as disciplina, b.nota
       FROM boletim b
       JOIN students s ON b.student_id = s.id
       JOIN disciplinas d ON b.disciplina_id = d.id
       WHERE s.id=$1`,
      [studentId]
    );
    res.json(boletim.rows);
  } catch (err) {
    res.status(500).json({ error: "Erro ao buscar boletim" });
  }
});

export default router;
