import { AxiosResponse } from "axios";
import { call, CallType } from "../core/proxy";
import { IToDoItem } from "../screens/todoList/todoItem";

export const getTodos = async (): Promise<IToDoItem[]> => {
  return await call<IToDoItem[]>(CallType.Get, 'api/todos').then((response: AxiosResponse<IToDoItem[], any>) => response.data).catch((error) => { throw error });
};

export const addTodo = async (todo: IToDoItem): Promise<IToDoItem> => {
  return await call<IToDoItem>(CallType.Post, 'api/todo', todo).then((response: AxiosResponse<IToDoItem, any>) => response.data).catch((error) => { throw error });
};

export const removeTodo = async (id: string): Promise<string> => {
  return await call<string>(CallType.Delete, `api/todo/${id}`).then(() => id).catch((error) => { throw error });
};

export const checkTodo = async (id: string): Promise<string> => {
  return await call<string>(CallType.Put, `api/todo/check/${id}`).then(() => id).catch((error) => { throw error });
};