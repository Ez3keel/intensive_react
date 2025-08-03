import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import { useState } from "react";

export default function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Estudar programação",
      description:
        "Estudar programação para se tornar um desenvolvedor Full Stack",
      isCompleted: false,
    },
    {
      id: 2,
      title: "Estudar programação",
      description:
        "Estudar programação para se tornar um desenvolvedor Full Stack",
      isCompleted: false,
    },
    {
      id: 3,
      title: "Estudar programação",
      description:
        "Estudar programação para se tornar um desenvolvedor Full Stack",
      isCompleted: false,
    },
  ]);
  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px]">
        <h1 className="text-3x1 text-slate-100 font-bold text-center">
          Gerenciador de Tarefas
        </h1>
        {/* <AddTask /> */}
        {/* Passando os dados pelo props para ter acesso no componente */}
        <Tasks tasks={tasks} />
      </div>
    </div>
  );
}

/**
 * Anotation
 * import { useState } from "react";

export default function App() {
  // State
  // dentro do useState definimos o valor inicial
  const [message, setMessage] = useState("Olá, mundo!");
  return (
    <div>
      <h1>{message}</h1>
      <button
        onClick={() => {
          setMessage("Olá, fui clicado!");
        }}
      >
        Mudar Mensagem
      </button>
    </div>
  );
}

 */
