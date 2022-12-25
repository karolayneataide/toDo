import styles from "../NewTask/NewTask.module.css";
import vector from "../../assets/vector.svg";

export function NewTask() {
  return (
    <div className={styles.wrapper}>
      <input
        className={styles.input}
        placeholder="Adicione uma nova tarefa"
        type="text"
      />
      <button className={styles.button}>
        <text>Criar</text> <img src={vector} alt="Símbolo de adição" />
      </button>
    </div>
  );
}
