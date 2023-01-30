import styles from "../FullList/FullList.module.css";
import Trash from "../../assets/trash.svg";

export function FullList({ tasks, onDeleteTask }) {
  // const [check, setCheck] = false;

  return (
    <div className={styles.fullList}>
      {tasks.map((task, index) => (
        <div className={styles.checkbox} key={index}>
          <div className={styles.startBox}>
            <input defaultChecked type="checkbox" />
          </div>
          <div className={styles.centerBox}>
            <label>{task.content}</label>
          </div>
          <div className={styles.endBox}>
            <button
              onClick={() => onDeleteTask(task.id)}
              type="submit"
              title="Deletar tarefa"
            >
              <img src={Trash} />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
