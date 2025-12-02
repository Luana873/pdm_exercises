import { Router } from "express";
import { listCourses, addCourse, editCourse, removeCourse } from "../controllers/courseController";

const router = Router();

router.get("/", listCourses);
router.post("/", addCourse);
router.put("/:id", editCourse);
router.delete("/:id", removeCourse);

export default router;
