import styles from "../TaskList/TaskList.module.css";
import { EmptyList } from "../EmptyList/EmptyList";
import { FullList } from "../FullList/FullList";

export function TaskList({ tasks }) {
  return (
    <div className={styles.container}>
      <div className={styles.boxSize}>
        <div className={styles.wrapper}>
          <div className={styles.box}>
            <div className={styles.createdTask}>Tarefas criadas</div>
            <div className={styles.counter}>{tasks.length}</div>
          </div>
          <div className={styles.box}>
            <div className={styles.completeTask}>Tarefas concluídas</div>
            <div className={styles.counter}>0</div>
          </div>
        </div>
        <div>
          {tasks.length === 0 ? <EmptyList /> : <FullList tasks={tasks} />}
        </div>
      </div>
    </div>
  );
}
