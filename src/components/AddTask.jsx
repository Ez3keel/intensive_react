import { useState } from "react";
import Input from "./Input";
import Button from "./Button";

export default function AddTask({ onAddTaskSubmit }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  return (
    <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow flex flex-col gap-2">
      <Input
        type="text"
        placeholder="Titulo da tarefa"
        value={title}
        onChange={(event) => {
          setTitle(event.target.value);
        }}
      />

      <Input
        type={"text"}
        placeholder={"Descrição da tarefa"}
        value={description}
        onChange={(event) => {
          setDescription(event.target.value);
        }}
      />

      <Button
        className="bg-violet-600 text-white p-2 rounded-md"
        onClick={() => {
          onAddTaskSubmit(title, description);
        }}
      >
        Adicionar Tarefa
      </Button>
    </div>
  );
}
