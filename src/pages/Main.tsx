import { useState } from 'react';
import Header from '../components/base/Header';
import InputTodo from '../components/todo/InputTodo';
import { TodoDataType } from '../types/types';
import TodoList from '../components/todo/TodoList';

const Main = () => {
  const [todoListData, setTodoListData] = useState<TodoDataType[] | []>([]);

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
