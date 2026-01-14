import Task from "../Model/tasksSchema.js";

export const getTasks = async (req, res) => {
  try {
    const foundTasks = await Task.find();
    res.json(foundTasks);
  } catch (error) {
    res.status(500).json({ errorMessage: "Error al obtener las tareas" });
  }
};

export const createTask = async (req, res) => {
  try {
    const { username, task, expiration } = req.body;

    const newTask = new Task({
      username,
      task,
      expiration,
    });

    const savedTask = await newTask.save();

    res.send(savedTask);
  } catch (error) {
    res.status(500).json({ errorMessage: "Error al crear la tarea", error });
  }
};
