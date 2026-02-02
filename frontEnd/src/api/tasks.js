import axios from "./axios";

export const getProductsRequest = () => axios.get("/tasks");

export const createProductRequest = (task) => axios.post("/tasks", task);

export const updateProductRequest = (id, task) =>
  axios.put(`/tasks/${id}`, task);

export const deleteProductRequest = (id) => axios.delete(`/tasks/${id}`);
