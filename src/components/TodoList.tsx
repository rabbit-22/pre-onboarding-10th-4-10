import React from 'react';
import { Todo } from '../types/todo';
import TodoItem from './TodoItem';

const TodoList = ({
  todos,
  setTodos,
}: {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}) => {
  return todos.length ? (
    <ul>
      {todos.map(({ id, title }) => (
        <TodoItem key={id} id={id} title={title} setTodos={setTodos} />
      ))}
    </ul>
  ) : (
    <div className="empty-list">...</div>
  );
};

export default TodoList;
