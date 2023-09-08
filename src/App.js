import './App.scss';
import DarkModeToggle from './components/DarkModeToggle';
import { TodoWrapLocalStorage } from './components/TodoWrapLocalStorage';

function App() {
  return (
    <div>
      <DarkModeToggle />
      <TodoWrapLocalStorage />
    </div>
  );
}

export default App;
