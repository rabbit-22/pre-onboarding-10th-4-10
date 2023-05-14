import { FaSpinner } from 'react-icons/fa';
import { useCallback, useState } from 'react';
import { SetStateType, TodoDataType } from '../../types/types';

import { deleteTodo } from '../../api/todo';
import HandleItemButton from './HandleItemButton';

type Props = {
  id: string;
  title: string;
  setTodos: SetStateType<TodoDataType[]>;
};

const TodoItem = ({ id, title, setTodos }: Props) => {
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
          <HandleItemButton mode="remove" handleClick={handleRemoveTodo} />
        ) : (
          <FaSpinner className="spinner" />
        )}
      </div>
    </li>
  );
};

export default TodoItem;
