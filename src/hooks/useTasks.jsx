import { useContext } from "react";
import { TaskContext } from "../provider/TasksProvider";

export default function useTasks() {
  return useContext(TaskContext);
}
