import axios from "./axios";

export const getProductsRequest = () => axios.get("/tasks");

export const createProductRequest = () => axios.post("/tasks");

export const updateProductRequest = (id, task) =>
  axios.put(`/tasks/${id}`, task);

export const deleteProductRequest = (id) => axios.delete(`/tasks/${id}`);
