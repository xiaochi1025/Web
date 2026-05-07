import { Button } from '@/shared/ui';
import { useCounter } from '@/features/counter/hooks/useCounter';
import './Counter.css';

interface CounterProps {
  initialCount?: number;
}

export const Counter: React.FC<CounterProps> = ({ initialCount = 0 }) => {
  const { count, increment, decrement, reset } = useCounter(initialCount);

  return (
    <div className="counter-component">
      <div className="counter-display">
        <span className="count-value">{count}</span>
      </div>
      <div className="counter-controls">
        <Button onClick={decrement} variant="secondary" size="large">
          -
        </Button>
        <Button onClick={() => reset()} variant="secondary">
          Reset
        </Button>
        <Button onClick={increment} variant="primary" size="large">
          +
        </Button>
      </div>
    </div>
  );
};
