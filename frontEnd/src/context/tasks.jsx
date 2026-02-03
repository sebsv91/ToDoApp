import { createContext, useContext, useState } from "react";
import {
  getProductsRequest,
  createProductRequest,
  updateProductRequest,
  deleteProductRequest,
} from "../api/tasks";

export const TasksContext = createContext();

export const useTasks = () => {
  const context = useContext(TasksContext);

  if (!context) {
    throw new Error("useTasks must be within a TaskProvider");
  }

  return context;
};

export const TasksProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [errors, setErrors] = useState([]);

  const getTasks = async () => {
    try {
      const response = await getProductsRequest();
      setTasks(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const createTask = async (task) => {
    try {
      const response = await createProductRequest(task);
      console.log(response);
      setErrors([]);
      return true;
    } catch (error) {
      console.log(error);
      // setErrors(error.response.data);
      return false;
    }
  };

  const updateTask = async (id, task) => {
    try {
      const res = await updateProductRequest;
    } catch (error) {}
  };

  const deleteTask = async (id) => {
    try {
      const res = await deleteProductRequest(id);
      if (res.status === 204) setTasks(tasks.filter((task) => task._id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <TasksContext.Provider
      value={{
        tasks,
        getTasks,
        createTask,
        deleteTask,
        errors,
      }}
    >
      {children}
    </TasksContext.Provider>
  );
};
