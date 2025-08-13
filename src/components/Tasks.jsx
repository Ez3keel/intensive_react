import { ChevronRightIcon, TrashIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Tasks({tasks, onTaskClick, deleteTask}) {
  const navigate = useNavigate();

  function onSeeDetailsClick(task) {
    // Cria um objeto URLSearchParams para construir os parâmetros de consulta
    // Isso é útil para passar dados na URL
    const queryParams = new URLSearchParams();
    // Adiciona os parâmetros de título e descrição à URL
    // Isso permite que a página de detalhes da tarefa receba esses dados
    queryParams.set("title", task.title);
    queryParams.set("description", task.description);

    // Navega para a página de detalhes da tarefa
    // A URL será algo como /tasks?title=...&description=...
    navigate(`/tasks/?${queryParams.toString()}`);
  }

  return (
    <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
      {tasks.map((task) => (
        <li key={task.id} className="flex gap-2">
          <button
            onClick={() => onTaskClick(task.id)}
            className={`bg-violet-600 text-left w-full text-white p-2 rounded-md ${
              task.isCompleted && "line-through"
            }`}
          >
            {task.title}
            {task.isCompleted ? " ✅" : " ❌"}
          </button>


          <button onClick={ () => onSeeDetailsClick(task)}
            className="bg-violet-600 p-2 rounded-md text-white">
            <ChevronRightIcon />
          </button>


          <button className="bg-violet-600 p-2 rounded-md text-white" 
          //Chama o método deleteTask passando o ID da tarefa
          onClick={() => deleteTask(task.id)}> 
            <TrashIcon/>
          </button>
        </li>
      ))}
    </ul>
  );
}

// export default function Tasks(props) {
//   console.log(props);
//   return (
//     <div>
//       {props.tasks.map((task) => (
//         <p key={task.id}>{task.title}</p>
//       ))}
//     </div>
//   );
// }
