import { Router } from 'express';
import * as ctrl from '../controllers/gradesController';
const router = Router();

router.post('/', ctrl.add);                      // POST /api/grades
router.get('/', ctrl.list);                      // GET /api/grades
router.get('/student/:studentId', ctrl.boletimByStudent); // GET /api/grades/student/:studentId
router.get('/:id', ctrl.boletimByStudent);       // GET /api/grades/:id (boletim compat)
export default router;
