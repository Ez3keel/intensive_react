import { useState } from "react";


export default function AddTask({onAddTaskSubmit}) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    return(
        <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow flex flex-col gap-2">
            <input type="text"  placeholder="Titulo da tarefa" className="border border-slate-300 outline-violet-400 px-4 py-2 rounded-md" 
            value={title}
            onChange={(event) =>{ setTitle(event.target.value)}}/>

            <input type="text"  placeholder="Descrição da tarefa" className="border border-slate-300 outline-violet-400 px-4 py-2 rounded-md"
            value={description}
            onChange={(event) =>{ setDescription(event.target.value)}}/>

            <button className="bg-violet-600 text-white p-2 rounded-md"
            onClick={() => {onAddTaskSubmit(title, description);}}>
                    Adicionar Tarefa 
            </button>
            
        </div>
    );
};
