import vector from "../../assets/vector.svg";
import styles from "../NewTask/NewTask.module.css";

export function NewTask() {
  return (
    <div className={styles.wrapper}>
      <input
        className={styles.input}
        placeholder="Adicione uma nova tarefa"
        type="text"
      />
      <button className={styles.button}>Criar </button>
    </div>
  );
}
