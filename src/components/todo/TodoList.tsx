import './Todo.css';
import { Dispatch, SetStateAction } from 'react';
import { TodoDataType } from '../../types/types';

type Props = {
  todos: TodoDataType[] | [];
  setTodos: Dispatch<SetStateAction<TodoDataType[] | []>>;
};

const TodoList = ({ todos, setTodos }: Props) => {
  return <div>TodoList</div>;
};

export default TodoList;
