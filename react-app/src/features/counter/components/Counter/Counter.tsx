import { Button, Space } from 'antd'
import { useCounter } from '@/features/counter/hooks/useCounter'
import './Counter.css'

interface CounterProps {
  initialCount?: number
}

export const Counter: React.FC<CounterProps> = ({ initialCount = 0 }) => {
  const { count, increment, decrement, reset } = useCounter(initialCount)

  return (
    <div className="counter-component">
      <div className="counter-display">
        <span className="count-value">{count}</span>
      </div>
      <div className="counter-controls">
        <Space>
          <Button onClick={decrement} icon={<span>-</span>}>
            减少
          </Button>
          <Button onClick={() => reset()}>重置</Button>
          <Button onClick={increment} type="primary" icon={<span>+</span>}>
            增加
          </Button>
        </Space>
      </div>
    </div>
  )
}

