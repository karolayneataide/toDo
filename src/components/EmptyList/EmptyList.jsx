import styles from "../EmptyList/EmptyList.module.css";
import Clipboard from "../../assets/clipboard.svg";

export function EmptyList() {
  return (
    <div className={styles.emptyList}>
      <img src={Clipboard} alt="" />
      <p>Você ainda não tem tarefas cadastradas</p>
      <p>Crie tarefas e organize seus itens a fazer</p>
    </div>
  );
}
