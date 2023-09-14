import { Router } from "express";
import acudientes from "./acudientes.js";
import medicos from "./medicos.js";
import usuarios from "./usuarios.js";
import citas from "./citas.js";
const router = Router();

router.use('/acudientes', acudientes);
router.use('/medicos', medicos);
router.use('/usuarios', usuarios);
router.use('/citas', citas);

export default router;