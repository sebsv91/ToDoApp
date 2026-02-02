// Importamos zod
import { z } from "zod";

// Creación de un nuevo schema de zod
export const createTaskSchema = z.object({
  /* username: z
    .string({
      error: (issue) =>
        issue.input === undefined ? "This field is required" : "Not a string",
    })
    .min(4)
    .max(15)
    .trim(),
  */
  task: z
    .string({
      error: (issue) =>
        issue.input === undefined ? "This field is required" : "Not a string",
    })
    .trim(),
  // expiration: z.number().positive(),
});

// Creación de un schema de zod para actualizar tareas
export const updateTaskSchema = z.object({
  username: z
    .string({
      error: (issue) =>
        issue.input === undefined ? "This field is required" : "Not a string",
    })
    .min(4)
    .max(15)
    .trim(),
  task: z
    .string({
      error: (issue) =>
        issue.input === undefined ? "This field is required" : "Not a string",
    })
    .trim(),
  expiration: z.number().positive(),
});
