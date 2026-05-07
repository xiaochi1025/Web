import { Counter } from '@/features/counter';
import { TodoList } from '@/features/todo';
import { ApiExample } from '@/features/api-example';
import './Home.css';

export const Home: React.FC = () => {
  return (
    <div className="home-page">
      <section className="feature-section">
        <h2>Counter Feature</h2>
        <Counter initialCount={0} />
      </section>

      <section className="feature-section">
        <h2>Todo List Feature</h2>
        <TodoList />
      </section>

      <section className="feature-section">
        <h2>API Integration Feature</h2>
        <ApiExample />
      </section>
    </div>
  );
};
