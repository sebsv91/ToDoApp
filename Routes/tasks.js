// Importación Router de express
import { Router } from "express";
// Importación de nuestro middleware validador
import { validateSchema } from "../Middleware/validator.js";
// Importación de schemas de zod
import { createTaskSchema, updateTaskSchema } from "../Schema/tasks.js";

// Importación de los controladores de tareas para enrutamiento
import {
  getTasks,
  getTask,
  createTask,
  deleteTask,
  updateTask,
} from "../Controller/tasksController.js";

// Creación del router
const router = Router();

// Declaración de metodos http, rutas y controladores
router.get("/tasks", getTasks);
router.get("/tasks/:id", getTask);
router.post("/tasks", validateSchema(createTaskSchema), createTask);
router.put("/tasks/:id", validateSchema(updateTaskSchema), updateTask);
router.delete("/tasks/:id", deleteTask);

// Exportación del router
export default router;
