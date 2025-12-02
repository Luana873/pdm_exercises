-- users
CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(100) UNIQUE NOT NULL,
  password VARCHAR(200) NOT NULL,
  role VARCHAR(20) NOT NULL
);

-- professores
CREATE TABLE IF NOT EXISTS professores (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  titulacao VARCHAR(50),
  tempo_docencia INT
);

-- disciplinas
CREATE TABLE IF NOT EXISTS disciplinas (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  carga_horaria INT,
  professor_id INT REFERENCES professores(id)
);

-- students
CREATE TABLE IF NOT EXISTS students (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  enrollment VARCHAR(50) UNIQUE NOT NULL,
  course VARCHAR(50) NOT NULL
);

-- grades
CREATE TABLE IF NOT EXISTS grades (
  id SERIAL PRIMARY KEY,
  student_id INT REFERENCES students(id),
  disciplina_id INT REFERENCES disciplinas(id),
  nota NUMERIC(5,2) NOT NULL
);

ALTER TABLE students ADD COLUMN course_id INTEGER REFERENCES courses(id);


📄 src/models/student.ts

export interface Student {
  id?: number;
  name: string;
  enrollment: string;
  course_id: number;
}