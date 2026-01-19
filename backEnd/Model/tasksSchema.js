// Importación de mongoose
import mongoose from "mongoose";

// Creación de una variable con el valor de un nuevo schema de Mongoose
const tasksSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    trim: true,
  },
  task: {
    type: String,
    required: true,
    trim: true,
  },
  expiration: {
    type: Number,
    required: true,
  },
});

// Exportación de schema de mongoose
export default mongoose.model("Task", tasksSchema);
