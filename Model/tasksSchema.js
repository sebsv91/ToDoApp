import mongoose from "mongoose";

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

export default mongoose.model("Task", tasksSchema);
