import { SyntheticEvent, useCallback, useEffect, useState } from 'react';
import './Todo.css';

import useFocus from '../../hooks/useFocus';
import { SetStateType, TodoDataType } from '../../types/types';
import ItemButton from './ItemButton';
import { handleCreateTodos } from '../../utils/todos';
import Dropdown from './Dropdown';
import Spinner from '../base/Spinner';

type InputTodoProps = {
  setTodos: SetStateType<TodoDataType[]>;
};

const InputTodo = ({ setTodos }: InputTodoProps) => {
  const [inputText, setInputText] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { ref, setFocus } = useFocus();

  useEffect(setFocus, [setFocus]);

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
      <Dropdown keyword={inputText} />
      {!isLoading ? <ItemButton mode="add" /> : <Spinner />}
    </form>
  );
};

export default InputTodo;
