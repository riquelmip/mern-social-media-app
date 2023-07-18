import express from "express";

//Importo el controlador
import { login, register, logout } from "../controllers/auth.js";

//Creo la constante del enrutador
const router = express.Router();

//Creo las rutas
router.post("/login", login);
router.post("/register", register);
router.post("/logout", logout);

export default router;
