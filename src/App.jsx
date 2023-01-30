import { useState } from "react";
import { Header } from "./components/Header/Header";
import { NewTask } from "./components/NewTask/NewTask";
import { TaskList } from "./components/TaskList/TaskList";
import { v4 } from "uuid";
import "./styles/global.module.css";

function App() {
  const [tasks, setTasks] = useState([]);

  function deleteTask(taskToDelete) {
    const tasksWithoutDeletedOne = tasks.filter((task) => {
      return task.id != taskToDelete;
    });

    setTasks(tasksWithoutDeletedOne);
  }

  return (
    <div>
      <Header />
      <NewTask setTasks={setTasks} />
      <TaskList tasks={tasks} onDeleteTask={deleteTask} />
    </div>
  );
}

export default App;
