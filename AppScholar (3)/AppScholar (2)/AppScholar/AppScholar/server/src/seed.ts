import * as bcrypt from 'bcrypt';
import { pool } from './config/db';

async function seed(){
  const hashedAdmin = await bcrypt.hash('admin123', 10);
  const hashedProf = await bcrypt.hash('prof123', 10);
  const hashedAluno = await bcrypt.hash('aluno123', 10);

  await pool.query(`INSERT INTO users (name,email,password,role) VALUES ($1,$2,$3,$4) ON CONFLICT (email) DO NOTHING`,
    ['Admin Teste','admin@scholar.com',hashedAdmin,'admin']);
  await pool.query(`INSERT INTO users (name,email,password,role) VALUES ($1,$2,$3,$4) ON CONFLICT (email) DO NOTHING`,
    ['Professor Teste','prof@scholar.com',hashedProf,'professor']);
  await pool.query(`INSERT INTO users (name,email,password,role) VALUES ($1,$2,$3,$4) ON CONFLICT (email) DO NOTHING`,
    ['Aluno Teste','aluno@scholar.com',hashedAluno,'aluno']);

  // seed professors, disciplinas, students e grades (exemplos)
  await pool.query(`INSERT INTO professores (name,titulacao,tempo_docencia) VALUES ($1,$2,$3) ON CONFLICT DO NOTHING`, ['Carlos Silva','Mestre',10]);
  await pool.query(`INSERT INTO disciplinas (name,carga_horaria,professor_id) VALUES ($1,$2,$3) ON CONFLICT DO NOTHING`, ['Programação Mobile',60,1]);
  await pool.query(`INSERT INTO students (name,enrollment,course) VALUES ($1,$2,$3) ON CONFLICT DO NOTHING`, ['Ana Souza','2023001','TI']);
  await pool.query(`INSERT INTO grades (student_id,disciplina_id,nota) VALUES ($1,$2,$3)`, [1,1,8.5]);

  console.log('Seed executado');
  process.exit(0);
}

seed().catch(e => { console.error(e); process.exit(1); });
