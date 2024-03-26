import './App.css';
import CssBaseline  from '@mui/material/CssBaseline';
import TodoList from './8-ToDoList/TodoList.jsx';
import FormNavBar from './8-ToDoList/FormNavBar.jsx';


function App() {
  return (
    <div>
      <CssBaseline />
      <FormNavBar />
      <TodoList />
    </div>
  );
}

export default App;
