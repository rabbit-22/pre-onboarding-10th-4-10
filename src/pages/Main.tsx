import { useEffect, useState } from 'react';
import Header from '../components/base/Header';
import InputTodo from '../components/todo/InputTodo';
import TodoList from '../components/todo/TodoList';
import { TodoDataType } from '../types/types';
import { handleGetTodos } from '../utils/todos';

const Main = () => {
  const [todoListData, setTodoListData] = useState<TodoDataType[] | []>([]);

  useEffect(() => {
    handleGetTodos({ setTodoListData });
  }, []);

  return (
    <div className="container">
      <div className="inner">
        <Header />
        <InputTodo setTodos={setTodoListData} />
        <TodoList todos={todoListData} setTodos={setTodoListData} />
      </div>
    </div>
  );
};

export default Main;
