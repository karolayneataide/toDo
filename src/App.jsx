import React from "react";
import { Header } from "./components/Header/Header";
import { NewTask } from "./components/NewTask/NewTask";
import { TaskList } from "./components/TaskList/TaskList";
import TaskProvider from "./provider/TasksProvider";
import "./styles/global.module.css";

function App() {
  return (
    <TaskProvider>
      <Header />
      <NewTask />
      <TaskList />
    </TaskProvider>
  );
}

export default App;
