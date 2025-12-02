import { pool } from "../config/db";

export interface Course {
  id?: number;
  name: string;
  area: string;
  duration: number;
  coordinator: string;
}

export const createCourse = async (course: Course) => {
  const result = await pool.query(
    "INSERT INTO courses (name, area, duration, coordinator) VALUES ($1, $2, $3, $4) RETURNING *",
    [course.name, course.area, course.duration, course.coordinator]
  );
  return result.rows[0];
};

export const getAllCourses = async () => {
  const result = await pool.query("SELECT * FROM courses");
  return result.rows;
};

export const updateCourse = async (id: number, course: Course) => {
  const result = await pool.query(
    "UPDATE courses SET name=$1, area=$2, duration=$3, coordinator=$4 WHERE id=$5 RETURNING *",
    [course.name, course.area, course.duration, course.coordinator, id]
  );
  return result.rows[0];
};

export const deleteCourse = async (id: number) => {
  await pool.query("DELETE FROM courses WHERE id=$1", [id]);
  return true;
};
