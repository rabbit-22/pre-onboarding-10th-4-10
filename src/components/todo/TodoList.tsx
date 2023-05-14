import './Todo.css';
import { SetStateType, TodoDataType } from '../../types/types';
import TodoItem from './TodoItem';

type Props = {
  todos: TodoDataType[] | [];
  setTodos: SetStateType<TodoDataType[]>;
};

const TodoList = ({ todos, setTodos }: Props) => {
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
