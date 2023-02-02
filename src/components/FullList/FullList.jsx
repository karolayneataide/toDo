import styles from "../FullList/FullList.module.css";
import Trash from "../../assets/trash.svg";

export function FullList({ tasks, onDeleteTask, handleChecked }) {
  return (
    <div className={styles.fullList}>
      {tasks.map((task, index) => {
        const isChecked = task.isChecked ? styles.isChecked : null;
        return (
          <div className={styles.checkbox} key={index}>
            <div className={styles.startBox}>
              <input
                checked={task.isChecked}
                onChange={() => handleChecked(task.id)}
                type="checkbox"
              />
            </div>
            <div className={styles.centerBox}>
              <label className={isChecked}>{task.content}</label>
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
        );
      })}
    </div>
  );
}
