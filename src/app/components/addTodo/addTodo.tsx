"use client";
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import styles from "./addTodo.module.css";

const AddTodo = () => {
  const [todo, setTodo] = useState("");

  const addTodo = async () => {
    const id = uuidv4();
    await fetch(`/api/add-todo?id=${id}&name=${todo}`);
  };

  return (
    <div>
      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        className={styles.input}
      />
      <button type="submit" onClick={addTodo} className={styles.submitBtn}>
        Submit
      </button>
    </div>
  );
};

export default AddTodo;
