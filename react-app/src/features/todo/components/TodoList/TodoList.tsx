import { Button } from '@/shared/ui';
import { useTodoList } from '@/features/todo/hooks/useTodoList';
import './TodoList.css';

export const TodoList: React.FC = () => {
  const { todos, input, setInput, addTodo, toggleTodo, deleteTodo, completedCount, totalCount } =
    useTodoList();

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      addTodo();
    }
  };

  return (
    <div className="todo-component">
      <div className="todo-input">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Add a new task..."
          className="todo-input-field"
        />
        <Button onClick={addTodo} variant="primary">
          Add
        </Button>
      </div>

      <ul className="todo-list">
        {todos.map((todo) => (
          <li key={todo.id} className={`todo-item ${todo.completed ? 'completed' : ''}`}>
            <span className="todo-text" onClick={() => toggleTodo(todo.id)}>
              {todo.text}
            </span>
            <Button onClick={() => deleteTodo(todo.id)} variant="danger" size="small">
              Delete
            </Button>
          </li>
        ))}
      </ul>

      {totalCount > 0 && (
        <div className="todo-stats">
          <span>
            {completedCount} / {totalCount} completed
          </span>
        </div>
      )}
    </div>
  );
};
