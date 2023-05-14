import { SyntheticEvent, useCallback, useEffect, useState } from 'react';
import './Todo.css';
import { FaSpinner } from 'react-icons/fa';
import useFocus from '../../hooks/useFocus';
import { createTodo } from '../../api/todo';
import { SetStateType, TodoDataType } from '../../types/types';
import HandleItemButton from './HandleItemButton';

type Props = {
  setTodos: SetStateType<TodoDataType[]>;
};

const InputTodo = ({ setTodos }: Props) => {
  const [inputText, setInputText] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { ref, setFocus } = useFocus();

  useEffect(() => {
    setFocus();
  }, [setFocus]);

  const handleSubmit = useCallback(
    async (e: SyntheticEvent<HTMLFormElement>) => {
      try {
        e.preventDefault();
        setIsLoading(true);

        const trimmed = inputText.trim();
        if (!trimmed) {
          return alert('Please write something');
        }

        const newItem = { title: trimmed };
        const { data } = await createTodo(newItem);

        if (data) {
          return setTodos(prev => [...prev, data]);
        }
      } catch (error) {
        console.error(error);
        alert('Something went wrong.');
      } finally {
        setInputText('');
        setIsLoading(false);
      }
    },
    [inputText, setTodos]
  );

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <input
        className="input-text"
        placeholder="Add new todo..."
        ref={ref}
        value={inputText}
        onChange={e => setInputText(e.target.value)}
        disabled={isLoading}
      />
      {!isLoading ? (
        <HandleItemButton mode="add" />
      ) : (
        <FaSpinner className="spinner" />
      )}
    </form>
  );
};

export default InputTodo;
