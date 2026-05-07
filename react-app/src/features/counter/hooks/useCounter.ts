import { useState, useCallback } from 'react';

interface CounterState {
  count: number;
}

interface CounterActions {
  increment: () => void;
  decrement: () => void;
  reset: (initialValue?: number) => void;
  setCount: (value: number) => void;
}

export function useCounter(initialValue: number = 0) {
  const [count, setCount] = useState(initialValue);

  const increment = useCallback(() => setCount((prev) => prev + 1), []);
  const decrement = useCallback(() => setCount((prev) => prev - 1), []);
  const reset = useCallback((value: number = initialValue) => setCount(value), [initialValue]);

  return {
    count,
    increment,
    decrement,
    reset,
    setCount,
  };
}

export type { CounterState, CounterActions };
