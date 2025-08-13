import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import { useEffect, useState } from "react";
import { Toaster } from "./components/ui/sonner";
import { toast } from "sonner"
import { v4  } from 'uuid';


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

  // Monitora as mudanças no estado 'tasks' e registra no console sempre que houver uma atualização
  // sempre que tiver uma mudança no array de tarefas, ele vai logar no console no caso executar a função
  useEffect(() => {
    console.log(tasks);
  },[tasks])

  function onTaskClick(taskId) {
    const newTaks = tasks.map((task) => {
      // PRECISO ATUALIZAR ESSA TAREFA
      if (task.id === taskId) {
        return { ...task, isCompleted: !task.isCompleted };
      }

      //  NÃO PRECISO ATUALIZAR ESSA TAREFA
      return task;
    });
    setTasks(newTaks);
  }

  function deleteTask(taskId) {
    // Filtrar as tarefas para remover a tarefa com o ID especificado
    // Retorna todas as tarefas que não possuem o ID igual ao taskId  
    // tasks.filter() retorna um novo array
    // tasks.filter() não modifica o array original
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks);
  }

  function onAddTaskSubmit(title, description) {
    // Adiciona uma nova tarefa ao array de tarefas
  if (!title.trim() || !description.trim()) {
    toast.error("Preencha todos os campos!", {
      description: "Você precisa preencher o título e a descrição da tarefa.",
      classNames: {
        toast: "!bg-red-600 !text-white !border !border-red-600 !p-4 !rounded-md !shadow-lg",
        description: "!text-red-100"
      }
    });

    return;
    }

    const newTask = {
      id: v4(), // Gera um ID único
      title: title,
      description: description,
      isCompleted: false,
    };
    setTasks([...tasks, newTask]);

    toast.success("Tarefa adicionada com sucesso!", {
      description: "Sua nova tarefa foi adicionada à lista.",
      classNames: {
        toast: "!bg-green-600 !text-white !p-4 !rounded-md !shadow-lg !border !border-green-600",
        description: "!text-white-100 !text-sm mt-1"
      },
      
    });
  }

  return (
    <div className="w-screen h-screen bg-indigo-300 flex justify-center p-6">
      <div className="w-[500px] space-y-4">
        <h1 className="text-9x1 text-slate-100 font-bold text-center mb-6">
          Gerenciador de Tarefas
        </h1>
        <AddTask onAddTaskSubmit={onAddTaskSubmit} />
        {/* Passando os dados pelo props para ter acesso no componente */}
        <Tasks tasks={tasks} onTaskClick={onTaskClick} deleteTask={deleteTask}/>
      </div>
      <Toaster richColors  position="top-center"/>
      
    </div>
  );
}
