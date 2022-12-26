import styles from "../TaskList/TaskList.module.css";
import { EmptyList } from "../EmptyList/EmptyList";

export function TaskList() {
  return (
    <div className={styles.container}>
      <div className={styles.boxSize}>
        <div className={styles.wrapper}>
          <div className={styles.box}>
            <div className={styles.createdTask}>Tarefas criadas</div>
            <div className={styles.counter}>2</div>
          </div>
          <div className={styles.box}>
            <div className={styles.completeTask}>Tarefas concluídas</div>
            <div className={styles.counter}>0</div>
          </div>
        </div>
        <div>
          <EmptyList />
        </div>
      </div>
    </div>
  );
}
