import { Request, Response } from "express";
import { pool } from "../config/db";

// Função para buscar boletim de um aluno
export const getBoletimByStudentId = async (req: Request, res: Response) => {
  const studentId = Number(req.params.id);

  try {
    const query = `
      SELECT s.name AS student_name, d.name AS disciplina_name, g.nota
      FROM grades g
      JOIN students s ON g.student_id = s.id
      JOIN disciplinas d ON g.disciplina_id = d.id
      WHERE s.id = $1
    `;
    const result = await pool.query(query, [studentId]);

    if (result.rows.length === 0) {
      return res.status(404).json({ message: "Aluno não encontrado ou sem notas." });
    }

    // Calcular média por disciplina (caso haja múltiplas notas)
    const boletim = result.rows.map(row => ({
      disciplina: row.disciplina_name,
      nota: row.nota
    }));

    res.json({
      aluno: result.rows[0].student_name,
      boletim
    });
  } catch (error) {
    console.error("Erro ao buscar boletim:", error);
    res.status(500).json({ message: "Erro ao buscar boletim" });
  }
};
