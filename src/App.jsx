import * as React from "react";
import { useState } from "react";
import { Header } from "./components/Header/Header";
import { NewTask } from "./components/NewTask/NewTask";
import { TaskList } from "./components/TaskList/TaskList";
import "./styles/global.module.css";

function App() {
  const [tasks, setTasks] = useState([]);

  function deleteTask(taskId) {
    const tasksWithoutDeletedOne = tasks.filter((task) => {
      return task.id != taskId;
    });

    setTasks(tasksWithoutDeletedOne);
  }
  function handleChecked(taskId) {
    const tasksChanged = tasks.map((task) => {
      if (task.id === taskId) {
        return {
          ...task,
          isChecked: !task.isChecked,
        };
      }

      return task;
    });

    setTasks(tasksChanged);
  }

  return (
    <div>
      <Header />
      <NewTask setTasks={setTasks} />
      <TaskList
        tasks={tasks}
        handleChecked={handleChecked}
        onDeleteTask={deleteTask}
      />
    </div>
  );
}

export default App;
