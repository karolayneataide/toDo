import { useState } from "react";
import { Header } from "./components/Header/Header";
import { NewTask } from "./components/NewTask/NewTask";
import { TaskList } from "./components/TaskList/TaskList";
import "./styles/global.module.css";

function App() {
  const [tasks, setTasks] = useState([
    "Terminar relatório",
    "Escrever email",
    "Comprar pão",
  ]);

  return (
    <div>
      <Header />
      <NewTask setTasks={setTasks} />
      <TaskList tasks={tasks} />
    </div>
  );
}

export default App;
