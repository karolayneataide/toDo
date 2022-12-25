import { Header } from "./components/Header/Header";
import { NewTask } from "./components/NewTask/NewTask";
import { TaskList } from "./components/TaskList/TaskList";
import "./styles/global.module.css";

function App() {
  return (
    <div>
      <Header />
      <NewTask />
      <TaskList />
    </div>
  );
}

export default App;
