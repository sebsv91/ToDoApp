// Importación de express y middleware json
import express, { json } from "express";

// Importación del router para las tareas
import tasksRoutes from "./Routes/tasks.js";

// Importación de la función creada para la conexión de base de datos
import { connectDB } from "./db.js";

import cors from "cors";
import { FRONTEND_URL } from "./config.js";

// Creación nuestra app de express
const app = express();

// Asignación de puerto deseado
const port = 909;

// Deshabilitación de la leyenda x-powered-by
app.disable("x-powered-by");

app.use(
  cors({
    origin: FRONTEND_URL,
    credentials: true,
  }),
);

// Parsear JSON payloads
app.use(express.json());

// Haciendo uso de las rutas en nuestra aplicación Express
app.use("/api", tasksRoutes);

// Llamamos a la función asincrona para conectar a la base de datos
await connectDB();

// Inicialización de servidor
app.listen(port, () => {
  console.log(`Backend online, listening on port ${port}`);
});
