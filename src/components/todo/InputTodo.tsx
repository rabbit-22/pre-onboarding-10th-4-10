import { SyntheticEvent, useCallback, useEffect, useState } from 'react';
import './Todo.css';
import { FaSpinner } from 'react-icons/fa';
import useFocus from '../../hooks/useFocus';
import { SetStateType, TodoDataType } from '../../types/types';
import HandleItemButton from './HandleItemButton';
import { handleCreateTodos } from '../../utils/todos';

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

  const handleSubmitForm = useCallback(
    async (e: SyntheticEvent<HTMLFormElement>) => {
      e.preventDefault();
      setIsLoading(true);
      await handleCreateTodos(inputText, setTodos);
      setIsLoading(false);
      setInputText('');
    },
    [inputText, setTodos]
  );

  return (
    <form className="form-container" onSubmit={handleSubmitForm}>
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
