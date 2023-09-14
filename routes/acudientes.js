import { Router } from "express";
import * as ctrl from "../controllers/acudientes.js";
const router = Router();

router.get('/', ctrl.getAll);

export default router;