import { useEffect } from 'react';
import { useAppDispatch } from './redux/app/hooks';
import { getTodosRedux } from './redux/slices/todo/todoSlice';
import { TodoList } from './screens/todoList';

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getTodosRedux());
  }, []);

  return (
    <TodoList />
  );
}

export default App;
