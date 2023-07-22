"use client";

import { useState } from "react";
import styles from "./page.module.css";
import { RiDeleteBin6Line } from "react-icons/ri";

export interface Todos {
  id: number;
  name: string;
}

export default function Home() {
  const [todos, setTodos] = useState<Todos[]>([
    {
      id: 1,
      name: "todo 1",
    },
    {
      id: 2,
      name: "todo 2",
    },
  ]);

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((t) => t.id !== id));
  };

  const hasTodos = todos.length > 0;

  return (
    <main className={styles.main}>
      <section className={styles.todosWrapper}>
        <h1>Todos:</h1>
        {hasTodos ? (
          todos.map(({ id, name }) => (
            <div key={id} className={styles.todos}>
              <p>{name}</p>
              <RiDeleteBin6Line
                className={styles.delete}
                onClick={() => deleteTodo(id)}
                data-testid="trash"
              />
            </div>
          ))
        ) : (
          <p>Nothing to do!</p>
        )}
      </section>
    </main>
  );
}
