import { Counter } from '@/features/counter'
import { TodoList } from '@/features/todo'
import { ApiExample } from '@/features/api-example'
import { Typography } from 'antd'
import './Home.css'

const { Title } = Typography

export const Home: React.FC = () => {
  return (
    <div className="home-page">
      <section className="feature-section">
        <Title level={2}>计数器功能</Title>
        <Counter initialCount={0} />
      </section>

      <section className="feature-section">
        <Title level={2}>待办事项</Title>
        <TodoList />
      </section>

      <section className="feature-section">
        <Title level={2}>API 集成示例</Title>
        <ApiExample />
      </section>
    </div>
  )
}
