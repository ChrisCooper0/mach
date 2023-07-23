"use client";

import React from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import styles from "./todos.module.css";

const Todos = ({ rows }: { rows: any }) => {
  const deleteTodo = async (id: string, name: string) => {
    await fetch(`/api/delete-todo?id=${id}&name=${name}`);
  };

  return (
    rows.length > 0 &&
    rows.map(({ id, name }: { id: string; name: string }) => (
      <div key={id} className={styles.todos}>
        <p>{name}</p>
        <RiDeleteBin6Line
          onClick={() => deleteTodo(id, name)}
          data-testid="trash"
          className={styles.delete}
        />
      </div>
    ))
  );
};

export default Todos;
