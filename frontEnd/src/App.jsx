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
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    const payload = {
      ...data,
    };

    const taskCreated = await createTask(payload);
    if (taskCreated) {
      reset();
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
          <div className="flex flex-col gap-2 w-xl">
            <input
              type="text"
              className="border text-xl rounded-md outline-none px-1"
              {...register("task", {
                required: { value: true, message: "Este campo es requerido" },
              })}
            />
            <div className="flex gap-2 w-full justify-center">
              <label htmlFor="">Expiration: (Number of days)</label>
              <input
                type="number"
                className="border rounded-md px-1"
                {...register("expiration", {
                  required: {
                    valueAsNumber: true,
                    value: true,
                    message: "Este campo es requerido",
                  },
                  valueAsNumber: true,
                })}
              />
            </div>
          </div>

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
