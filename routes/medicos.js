import { Router } from "express";
import * as ctrl from "../controllers/medicos.js";
const router = Router();

router.get('/', ctrl.getAll);
router.get('/especialidad', ctrl.buscarPorEspecialidad);

export default router;