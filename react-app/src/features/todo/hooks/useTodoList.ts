import { useState, useCallback } from 'react';

export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

export function useTodoList() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [input, setInput] = useState('');

  const addTodo = useCallback(() => {
    if (input.trim()) {
      setTodos((prev) => [...prev, { id: Date.now(), text: input, completed: false }]);
      setInput('');
    }
  }, [input]);

  const toggleTodo = useCallback((id: number) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }, []);

  const deleteTodo = useCallback((id: number) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  }, []);

  const completedCount = todos.filter((t) => t.completed).length;

  return {
    todos,
    input,
    setInput,
    addTodo,
    toggleTodo,
    deleteTodo,
    completedCount,
    totalCount: todos.length,
  };
}
