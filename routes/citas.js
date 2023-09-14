import { Router } from "express";
import * as ctrl from "../controllers/citas.js";
const router = Router();

router.get('/', ctrl.getAll);
router.get('/buscar-por-fecha/:fecha', ctrl.buscarFecha);
router.get('/buscar-por-fecha/ordenado/:fechaordenada', ctrl.buscarFechaOrd);
router.get('/:user', ctrl.getOne);
router.get('/programadas/:doc', ctrl.getCitasProgramadas);
router.get('/doctores/:doctor', ctrl.getCitasDoctores);

export default router;