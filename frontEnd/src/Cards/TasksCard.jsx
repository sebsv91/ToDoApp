import { useTasks } from "../context/tasks";

function TasksCard({ task }) {
  const { deleteTask, update } = useTasks();

  return (
    <div className="border w-xl p-2 rounded-md flex justify-between items-center">
      <div className="flex flex-col">
        {" "}
        <h2 className="text-black">{task.task}</h2>
        <p>Expiration: {task.expiration} day/s</p>
      </div>
      <div className="flex gap-2">
        <button
          onClick={() => {
            deleteTask(task._id);
          }}
          className="rounded-md px-6 py-2 text-base hover:cursor-pointer bg-blue-600"
        >
          Actualizar
        </button>
        <button
          onClick={() => {
            deleteTask(task._id);
          }}
          className="rounded-md px-6 py-2 text-base hover:cursor-pointer bg-red-600"
        >
          Eliminar
        </button>
      </div>
    </div>
  );
}

export default TasksCard;
