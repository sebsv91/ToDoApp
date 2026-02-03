import "./App.css";
import { useForm } from "react-hook-form";
import { useTasks } from "./context/tasks.jsx";
import { useEffect } from "react";
import TasksCard from "./Cards/TasksCard.jsx";

function App() {
  const { getTasks, tasks, createTask, errors: createErrors } = useTasks();

  useEffect(() => {
    getTasks();
  }, [getTasks]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const payload = {
      ...data,
    };

    const taskCreated = await createTask(payload);
    if (taskCreated) {
      console.log("Tarea creada");
    }
  };

  return (
    <>
      <section
        id="to do app"
        className="flex flex-col items-center justify-center h-screen gap-5"
      >
        <h1 className="text-5xl">ToDo App!</h1>

        <form onSubmit={handleSubmit(onSubmit)} className="flex gap-5">
          <input
            type="text"
            className="border w-xl text-2xl rounded-md p-1 outline-none"
            {...register("task", {
              required: { value: true, message: "Este campo es requerido" },
            })}
          />
          <button className="rounded-md px-6 py-2 text-base hover:cursor-pointer bg-green-600">
            +
          </button>
        </form>
        <p className="text-red-500">{errors?.task?.message}</p>

        {tasks.map((task) => (
          <TasksCard key={task._id} task={task} />
        ))}
      </section>
    </>
  );
}

export default App;
