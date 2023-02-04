import React, { useEffect, useState, createContext } from "react";

export const TaskContext = createContext();

export default function TaskProvider({ children }) {
  const localStorage = window.localStorage;
  const tasksOnLocalStorage = JSON.parse(localStorage.getItem("tasks"));
  const [tasks, setTasks] = useState(tasksOnLocalStorage || []);

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

  useEffect(() => {
    const localStorage = window.localStorage;
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <TaskContext.Provider
      value={{ tasks, setTasks, deleteTask, handleChecked }}
    >
      {children}
    </TaskContext.Provider>
  );
}
