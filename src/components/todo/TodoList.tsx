import './Todo.css';
import { SetStateType, TodoDataType } from '../../types/types';
import TodoItem from './TodoItem';

type Props = {
  todos: TodoDataType[] | [];
  setTodos: SetStateType<TodoDataType[]>;
};

const TodoList = ({ todos, setTodos }: Props) => {
  const EMPTY_ITEMS = todos.length > 0;

  if (!EMPTY_ITEMS) return <div className="empty-list">...</div>;
  return (
    <ul>
      {todos.map(({ id, title }) => (
        <TodoItem key={id} id={id} title={title} setTodos={setTodos} />
      ))}
    </ul>
  );
};

export default TodoList;
