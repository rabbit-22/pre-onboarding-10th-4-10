import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import InputTodo from '../components/InputTodo';
import { Todo } from '../types/todo';
import { getTodoList } from '../api/todo';
import TodoList from '../components/TodoList';

const Main = () => {
  const [todoListData, setTodoListData] = useState<Todo[]>([]);

  useEffect(() => {
    (async () => {
      const { data } = await getTodoList();
      setTodoListData(data || []);
    })();
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
