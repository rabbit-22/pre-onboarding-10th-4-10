import React, { useState } from 'react';
import { handleCreateTodos } from '../utils/todos';
import { SetStateType, TodoDataType } from '../types/types';

const useFetchTodo = (setTodos: SetStateType<TodoDataType[]>) => {
  const [inputText, setInputText] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(event.target.value);
  };

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    setIsLoading(true);
    await handleCreateTodos(inputText, setTodos);
    setIsLoading(false);
    setInputText('');
  };

  return {
    isLoading,
    setInputText,
    inputText,
    handleChange,
    handleSubmit,
  } as const;
};

export default useFetchTodo;
