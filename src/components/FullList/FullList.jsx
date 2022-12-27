import styles from "../FullList/FullList.module.css";
import Trash from "../../assets/trash.svg";

export function FullList({ tasks, onRemoveTask }) {
  return (
    <div className={styles.fullList}>
      {tasks.map((task, index) => (
        <div className={styles.checkbox} key={index}>
          <input type="checkbox" id="ckecked" name="itemList" value="taskDid" />
          <label for="checked">{task}</label>
          <button type="submit">
            <img src={Trash} />
          </button>
        </div>
      ))}
    </div>
  );
}
