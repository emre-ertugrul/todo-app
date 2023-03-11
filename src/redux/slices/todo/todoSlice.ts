import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addTodo, checkTodo, getTodos, removeTodo } from "../../../services/todo";
import { IToDoItem } from "../../../screens/todoList/todoItem";
import { RootState } from "../../app/store";

export interface ToDoState {
  todos: IToDoItem[];
}

const initialState: ToDoState = {
  todos: []
};

export const getTodosRedux = createAsyncThunk("todo/get", async () => {
  return await getTodos();
});

export const addTodoRedux = createAsyncThunk("todo/add", async (name: string) => {
  return await addTodo({
    id: (Math.random() * 100).toString(),
    name,
    checked: false
  });
});

export const removeTodoRedux = createAsyncThunk("todo/remove", async (id: string) => {
  return await removeTodo(id);
});

export const checkTodoRedux = createAsyncThunk("todo/check", async (id: string) => {
  return await checkTodo(id);
});

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getTodosRedux.pending, state => { })
      .addCase(getTodosRedux.rejected, (state, action) => { })
      .addCase(getTodosRedux.fulfilled, (state, action) => {
        state.todos = action.payload;
      })
      .addCase(addTodoRedux.pending, state => { })
      .addCase(addTodoRedux.rejected, (state, action) => { })
      .addCase(addTodoRedux.fulfilled, (state, action) => {
        state.todos = [...state.todos, action.payload];
      })
      .addCase(removeTodoRedux.pending, state => { })
      .addCase(removeTodoRedux.rejected, (state, action) => { })
      .addCase(removeTodoRedux.fulfilled, (state, action) => {
        state.todos = state.todos.filter((todo) => todo.id !== action.payload);
      })
      .addCase(checkTodoRedux.pending, state => { })
      .addCase(checkTodoRedux.rejected, (state, action) => { })
      .addCase(checkTodoRedux.fulfilled, (state, action) => {
        const todoIdx = state.todos.findIndex((elem) => elem.id === action.payload);

        if (todoIdx > -1) {
          const newTodoItem = state.todos[todoIdx];
          newTodoItem.checked = !newTodoItem.checked;

          state.todos.splice(todoIdx, 1, newTodoItem);
        }
      });
  },
});

export const todosRedux = (state: RootState) => state.todo.todos;

export default todoSlice.reducer;
