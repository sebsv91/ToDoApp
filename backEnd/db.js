// Importación de mongoose
import mongoose from "mongoose";
// Importación de la variable de entorno MONGO_DB_URL
import { MONGO_DB_URL } from "./config.js";

// Función asincrona para conectar a base de datos
export const connectDB = async () => {
  try {
    // Usamos el metodo integrado para conectar a una base de datos, pasando como parametro el url de la base de datos
    await mongoose.connect(MONGO_DB_URL);
    // Si logra conectar, loggeamos en consola que se conecto exitosamente
    console.log("MongoDB connected!");
  } catch (error) {
    // Si hay algun error, loggeamos el error
    console.error(error);
  }
};
