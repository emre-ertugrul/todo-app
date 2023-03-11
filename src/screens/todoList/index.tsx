import { useState } from 'react';
import { VDFButton } from '../../components/VDFButton';
import { VDFTextField } from '../../components/VDFTextField';
import { useAppDispatch, useAppSelector } from '../../redux/app/hooks';
import { addTodoRedux, checkTodoRedux, removeTodoRedux, todosRedux } from '../../redux/slices/todo/todoSlice';
import { IToDoItem, TodoItem } from './todoItem';
import "./style.scss";

export function TodoList(props: any) {
  const todos = useAppSelector(todosRedux);
  const dispatch = useAppDispatch();

  const [todoText, setTodoText] = useState('');

  const addTodo = () => {
    if (!todoText?.length) {
      return;
    }

    dispatch(addTodoRedux(todoText));
    setTodoText('');
  };

  const onRemoveTodo = (id: string) => {
    dispatch(removeTodoRedux(id));
  };

  const onCheckedChangeTodo = (id: string) => {
    dispatch(checkTodoRedux(id));
  };

  return (
    <div className='todo-list-wrapper'>
      <h1>ToDo List</h1>
      <div className='new-todo-section'>
        <VDFTextField
          placeholder='New Task'
          value={todoText}
          onChange={(e) => setTodoText(e.target.value)}
        />
        <VDFButton
          buttonLabel='Add'
          onClick={addTodo}
        />
      </div>
      <div className='todo-list-section'>
        {todos.map((todo: IToDoItem) => {
          return (
            <TodoItem
              key={todo.id}
              item={todo}
              onRemoveTodo={onRemoveTodo}
              onCheckedChangeTodo={onCheckedChangeTodo}
            />
          );
        })}
      </div>
    </div>
  );
}