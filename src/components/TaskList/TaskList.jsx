import styles from "../TaskList/TaskList.module.css";
import { EmptyList } from "../EmptyList/EmptyList";
import { FullList } from "../FullList/FullList";
import useTasks from "../../hooks/useTasks";

export function TaskList() {
  const { tasks } = useTasks();

  const taskCreated = tasks.length;
  const tasksChecked = tasks.filter((task) => task.isChecked).length;

  return (
    <div className={styles.container}>
      <div className={styles.boxSize}>
        <div className={styles.wrapper}>
          <div className={styles.box}>
            <div className={styles.createdTask}>Tarefas criadas</div>
            <div className={styles.counter}>{taskCreated}</div>
          </div>
          <div className={styles.box}>
            <div className={styles.completeTask}>Tarefas concluídas</div>
            <div className={styles.counter}>
              {tasksChecked} de {taskCreated}
            </div>
          </div>
        </div>
        <div>{tasks.length === 0 ? <EmptyList /> : <FullList />}</div>
      </div>
    </div>
  );
}
