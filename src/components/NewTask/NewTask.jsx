import styles from "../NewTask/NewTask.module.css";
import vector from "../../assets/vector.svg";
import { useState } from "react";
import { v4 } from "uuid";

export function NewTask({ setTasks }) {
  const [task, setTask] = useState("");

  function handleCreateNewTask(event) {
    event.preventDefault();

    setTask("");
    setTasks((tasks) => [
      ...tasks,
      {
        id: v4(),
        content: task,
        isChecked: false,
      },
    ]);
  }

  return (
    <form onSubmit={handleCreateNewTask}>
      <div className={styles.wrapper}>
        <input
          name="task"
          placeholder="Adicione uma nova tarefa"
          className={styles.input}
          required
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
