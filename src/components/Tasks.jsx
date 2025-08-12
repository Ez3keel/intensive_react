import { ChevronRightIcon, DeleteIcon } from "lucide-react";

export default function Tasks(props) {
  return (
    <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
      {props.tasks.map((task) => (
        <li key={task.id} className="flex gap-2">
          <button
            onClick={() => props.onTaskClick(task.id)}
            className={`bg-zinc-500 text-left w-full text-black p-2 rounded-md ${
              task.isCompleted && "line-through"
            }`}
          >
            {task.title}
            {task.isCompleted ? " ✅" : " ❌"}
            {console.log(task.isCompleted)}
          </button>
          <button className="bg-slate-400 p-2 rounded-md text-white">
            <ChevronRightIcon />
          </button>
          <button className="bg-slate-400 p-2 rounded-md text-white">
            <DeleteIcon />
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
