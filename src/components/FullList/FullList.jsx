import styles from "../FullList/FullList.module.css";
import Trash from "../../assets/trash.svg";
import useTasks from "../../hooks/useTasks";

export function FullList() {
  const { tasks, deleteTask, handleChecked } = useTasks();

  return (
    <div className={styles.fullList}>
      {tasks.map((task, index) => {
        const isChecked = task.isChecked ? styles.isChecked : null;
        return (
          <div className={styles.checkbox} key={index}>
            <div className={styles.startBox}>
              <input
                checked={task.isChecked}
                id={task.id}
                onChange={() => handleChecked(task.id)}
                type="checkbox"
              />
              <label htmlFor={task.id}></label>
            </div>
            <div className={styles.centerBox}>
              <label className={isChecked}>{task.content}</label>
            </div>
            <div className={styles.endBox}>
              <button
                onClick={() => deleteTask(task.id)}
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
