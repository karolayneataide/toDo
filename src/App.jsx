import { Header } from "./components/Header/Header";
import { NewTask } from "./components/NewTask/NewTask";
import "./styles/global.module.css";

function App() {
  return (
    <div>
      <Header />
      <NewTask />
    </div>
  );
}

export default App;
