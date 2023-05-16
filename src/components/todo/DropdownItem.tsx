import React from 'react';
import ActiveItem from './ActiveItem';
import { SetStateType, TodoDataType } from '../../types/types';
import { createTodo } from '../../api/todo';

const DropdownItem = ({
  suggestion,
  keyword,
  setTodos,
  setInputText,
}: {
  suggestion: string;
  keyword: string;
  setTodos: SetStateType<TodoDataType[]>;
  setInputText: SetStateType<string>;
}) => {
  const handleClickItem = async () => {
    try {
      const newItem = { title: suggestion };
      setInputText(suggestion);
      const { data } = await createTodo(newItem);
      if (data) {
        return setTodos(prev => [...prev, data]);
      }
    } catch (error) {
      console.error(error);
      alert('Something went wrong.');
    } finally {
      setInputText('');
    }
  };
  return (
    <li className="dropdown-item" onClick={handleClickItem}>
      <p>{ActiveItem(suggestion, keyword)}</p>
    </li>
  );
};

export default DropdownItem;
