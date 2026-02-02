// Importación de la libreria dotenv que carga variables de entorno de un archivo .env y mandamos a llamar a la función para cargar los archivos
import { config } from "dotenv";
config();

export const MONGO_DB_URL = process.env.MONGO_DB_URL;
export const FRONTEND_URL = process.env.FRONTEND_URL;
