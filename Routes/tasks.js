// Importación Router de express
import { Router } from "express";

// Importación de los controladores de tareas para enrutamiento
import { getTasks, createTask } from "../Controller/tasksController.js";

// Creación del router
const router = Router();

// Declaración de metodos http, rutas y controladores
router.get("/tasks", getTasks);
router.post("/tasks", createTask);

// Exportación del router
export default router;
