import styles from "../TaskList/TaskList.module.css";
import Clipboard from "../../assets/clipboard.svg";

export function TaskList() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div>
          <div className={styles.createdTask}>Tarefas criadas</div>
          <div className={styles.counter}>2</div>
        </div>
        <div>
          <div className={styles.completeTask}>Tarefas concluídas</div>
          <div className={styles.counter}>0</div>
        </div>
      </div>
      <div>
        <div className={styles.emptyList}>
          <img src={Clipboard} alt="" />
          <p>Você ainda não tem tarefas cadastradas</p>
          <br />
          <p>Crie tarefas e organize seus itens a fazer</p>
        </div>
        <div></div>
      </div>
    </div>
  );
}
