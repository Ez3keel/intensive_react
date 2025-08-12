import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import { useState } from "react";
import { Toaster } from "./components/ui/sonner";
import { toast } from "sonner"

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
    if (!title || !description) {
      toast.error("Preencha todos os campos! ", {
        className: "bg-red-900 text-white",
        description: "Você precisa preencher o título e a descrição da tarefa.",
      });
      return;
    }
    const newTask = {
      id: tasks.length + 1, // Gera um ID único
      title: title,
      description: description,
      isCompleted: false,
    };
    setTasks([...tasks, newTask]);
    toast.success("Tarefa adicionada com sucesso!", {
      className: "bg-green-900 text-white",
      description: "Sua nova tarefa foi adicionada à lista.",
    });

  }

  return (
    <div className="w-screen h-screen bg-violet-300 flex justify-center p-6">
      <div className="w-[500px] space-y-4">
        <h1 className="text-3x1 text-slate-100 font-bold text-center mb-6">
          Gerenciador de Tarefas
        </h1>
        <AddTask onAddTaskSubmit={onAddTaskSubmit} />
        {/* Passando os dados pelo props para ter acesso no componente */}
        <Tasks tasks={tasks} onTaskClick={onTaskClick} deleteTask={deleteTask}/>
      </div>
      <Toaster position="top-center"/>
    </div>
  );
}
