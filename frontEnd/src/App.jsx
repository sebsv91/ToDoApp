import "./App.css";
import { useForm } from "react-hook-form";
import { useTasks } from "./context/tasks.jsx";

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { getTasks, createTask, errors: createErrors } = useTasks();

  const onSubmit = async (data) => {
    const payload = {
      ...data,
    };

    console.log(payload);

    const taskCreated = await createTask(payload);
    if (taskCreated) {
      console.log("Tarea creada");
    }
  };

  return (
    <>
      <section
        id="to do app"
        className="flex flex-col items-center justify-center h-screen gap-15"
      >
        <h1 className="text-5xl">ToDo App!</h1>

        <form onSubmit={handleSubmit(onSubmit)} className="flex gap-5">
          <input
            type="text"
            className="border w-xl text-2xl rounded-md p-1"
            {...register("task", {
              required: { value: true, message: "Este campo es requerido" },
            })}
          />
          <button className="rounded-md px-6 py-2 text-base hover:cursor-pointer bg-green-600">
            +
          </button>
        </form>
        <p className="text-red-500">{errors?.task?.message}</p>
      </section>
    </>
  );
}

export default App;
