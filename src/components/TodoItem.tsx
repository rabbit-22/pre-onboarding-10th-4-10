import React, { useCallback, useState } from 'react';
import { FaSpinner, FaTrash } from 'react-icons/fa';
import { Todo } from '../types/todo';
import { deleteTodo } from '../api/todo';

const TodoItem = ({
  id,
  title,
  setTodos,
}: {
  id: string;
  title: string;
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleRemoveTodo = useCallback(async () => {
    try {
      setIsLoading(true);
      await deleteTodo(id);

      setTodos(prev => prev.filter(item => item.id !== id));
    } catch (error) {
      console.error(error);
      alert('Something went wrong.');
    } finally {
      setIsLoading(false);
    }
  }, [id, setTodos]);

  return (
    <li className="item">
      <span>{title}</span>
      <div className="item-option">
        {!isLoading ? (
          <button onClick={() => handleRemoveTodo()}>
            <FaTrash className="btn-trash" />
          </button>
        ) : (
          <FaSpinner className="spinner" />
        )}
      </div>
    </li>
  );
};

export default TodoItem;
