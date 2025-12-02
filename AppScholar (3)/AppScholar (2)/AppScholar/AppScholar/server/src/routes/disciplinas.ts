import { Router } from 'express';
import * as ctrl from '../controllers/disciplinaController';
const router = Router();

router.post('/', ctrl.create);
router.get('/', ctrl.list);

export default router;
