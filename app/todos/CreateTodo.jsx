"use client";

import { useState } from "react";
import { useRouter } from 'next/navigation';

const CreateTodo = () => {
  const [title, setTitle] = useState("");
  const [completed, setCompleted] = useState(false);

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch("https://6370ee800399d1995d86faeb.mockapi.io/api/todos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, completed }),
    });

    setTitle('');
    setCompleted(false);

    router.refresh();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Create new Todo</h1>
      <input
        type="text"
        placeholder="todo"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="checkbox"
        checked={completed}
        onChange={(e) => setCompleted(e.target.checked)}
      ></input>
      <button type="submit">Create new Todo</button>
    </form>
  );
};

export default CreateTodo;
