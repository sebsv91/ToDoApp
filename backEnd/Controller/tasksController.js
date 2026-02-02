// Importación del schema de tareas de mongoose
import Task from "../Model/tasksSchema.js";

// Controlador para obtener las tareas desde la BD
export const getTasks = async (req, res) => {
  // Bloque try-catch para manejo de excepciones
  try {
    // Declaración de variable, buscando en la BDs todas las tareas de forma asincrona
    const foundTasks = await Task.find();

    // Retornamos en formato JSON las tareas encontradas
    res.json(foundTasks);
  } catch (error) {
    // En caso de haber un error, asignamos un codigo 500 y regresamos un mensaje de error en formato JSON
    res.status(500).json({ errorMessage: "Error al obtener las tareas" });
  }
};

// Controlador para obtener una tarea en especifico usando un id
export const getTask = async (req, res) => {
  // Bloque try-catch para manejo de excepciones
  try {
    // Creamos una variable para buscar una tarea de forma asincrona obteniendo el id desde la petición: req.params.id
    const taskFound = await Task.findById(req.params.id);

    // Si no encuentra la tarea con ese ID, notificamos que la tarea no fue encontrada
    if (!taskFound) {
      return res.status(404).json({ message: "Tarea no encontrada" });
    }

    // Si fue encontrada, regresamos la tarea encontrada
    res.json(taskFound);
  } catch (error) {
    // En caso de haber un error, asignamos un codigo 500 y regresamos un mensaje de error en formato JSON
    res.status(500).json({ errorMessage: "Error al obtener la tarea" });
  }
};

// Controlador para crear una nueva tarea
export const createTask = async (req, res) => {
  // Bloque tr-catch para manejo de excepciones
  try {
    // Deestructuración de un objeto para obtener los valores requeridos desde el cuerpo de la petición
    const { task } = req.body;

    // Creación de una nueva tarea usando el schema de mongoose, con los valores de la petición
    const newTask = new Task({
      task,
    });

    // Guardado de la tarea nueva en la base de datos de forma asincrona
    const savedTask = await newTask.save();

    // Regresamos la tarea guardada
    res.send(savedTask);
  } catch (error) {
    // En caso de haber un error, asignamos un codigo 500 y regresamos un mensaje de error en formato JSON
    res.status(500).json({ errorMessage: "Error al crear la tarea", error });
  }
};

// Controlador para eliminar una tarea
export const deleteTask = async (req, res) => {
  // Bloque tr-catch para manejo de excepciones
  try {
    // Buscamos una tarea con un id, especifico, proveniente de la request.params.id y la eliminamos con el metodo integrado de mongoose
    const taskFound = await Task.findByIdAndDelete(req.params.id);

    // Si no encontramos la tarea notificamos que no se encontro una tarea con dicho id
    if (!taskFound) return res.status(404).json({ message: "Task not found" });

    // Establece el status code de la respuesta http a 204, que significa que la petición fue exitosa pero intencionalmente retorna un mensaje sin cuerpo
    return res.sendStatus(204);
  } catch (error) {
    // En caso de haber un error, asignamos un codigo 500 y regresamos un mensaje de error en formato JSON
    res.status(500).json({ errorMessage: "Error al borrar la tarea", error });
  }
};

// Controlador para actualizar una tarea
export const updateTask = async (req, res) => {
  // Bloque tr-catch para manejo de excepciones
  try {
    // Buscamos una tarea y la actualizamos, la tarea se localiza usando el id proveniente de la petición: req.params.id, como segundo parametro pasamos el cuerpo de la petición con los valores a actualizar
    const taskFound = await Task.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    // Si no encontramos la tarea notificamos que no se encontro una tarea con dicho id
    if (!taskFound) {
      return res.status(404).json({ message: "Tarea no encontrada" });
    }

    // Retornamos en formato JSOn la tarea con las modificaciones
    res.json(taskFound);
  } catch (error) {
    // En caso de haber un error, asignamos un codigo 500 y regresamos un mensaje de error en formato JSON
    res
      .status(500)
      .json({ errorMessage: "Error al actualizar la tarea", error });
  }
};
