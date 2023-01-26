import styles from "../NewTask/NewTask.module.css";
import vector from "../../assets/vector.svg";
import { useState } from "react";

export function NewTask({ setTasks }) {
  const [task, setTask] = useState("");

  function handleCreateNewTask(event) {
    event.preventDefault();

    setTasks((tasks) => [...tasks, task]);

    // event.target.task = "";
  }

  return (
    <form onSubmit={handleCreateNewTask}>
      <div className={styles.wrapper}>
        <input
          name="task"
          placeholder="Adicione uma nova tarefa"
          className={styles.input}
          type="text"
          value={task}
          onChange={(event) => setTask(event.target.value)}
        />
        <button className={styles.button} type="submit">
          <span>Criar</span> <img src={vector} alt="Símbolo de adição" />
        </button>
      </div>
    </form>
  );
}
