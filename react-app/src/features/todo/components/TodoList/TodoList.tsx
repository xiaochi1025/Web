import { Button, Input, Space, List, Tag, Empty } from 'antd'
import { useState } from 'react'
import { useTodoList } from '../hooks/useTodoList'
import type { Todo } from '../hooks/useTodoList'
import './TodoList.css'

export const TodoList: React.FC = () => {
  const { todos, input, setInput, addTodo, toggleTodo, deleteTodo, completedCount, totalCount } =
    useTodoList()
  const [filteredTodos, setFilteredTodos] = useState<Todo[]>(todos)
  const [filter, setFilter] = useState<'all' | 'active' | 'completed'>('all')

  const handleFilter = (type: 'all' | 'active' | 'completed') => {
    setFilter(type)
    if (type === 'all') {
      setFilteredTodos(todos)
    } else if (type === 'active') {
      setFilteredTodos(todos.filter((t) => !t.completed))
    } else {
      setFilteredTodos(todos.filter((t) => t.completed))
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      addTodo()
    }
  }

  return (
    <div className="todo-component">
      <div className="todo-input">
        <Input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="添加新任务..."
          size="large"
          onPressEnter={handleKeyPress}
        />
        <Button onClick={addTodo} type="primary" size="large">
          添加
        </Button>
      </div>

      <div className="todo-filters">
        <Space>
          <Button
            type={filter === 'all' ? 'primary' : 'default'}
            onClick={() => handleFilter('all')}
          >
            全部
          </Button>
          <Button
            type={filter === 'active' ? 'primary' : 'default'}
            onClick={() => handleFilter('active')}
          >
            进行中
          </Button>
          <Button
            type={filter === 'completed' ? 'primary' : 'default'}
            onClick={() => handleFilter('completed')}
          >
            已完成
          </Button>
        </Space>
      </div>

      {filteredTodos.length === 0 ? (
        <Empty description="暂无任务" />
      ) : (
        <List
          className="todo-list"
          itemLayout="horizontal"
          dataSource={filteredTodos}
          renderItem={(todo) => (
            <List.Item
              className={`todo-item ${todo.completed ? 'completed' : ''}`}
              actions={[
                <Button
                  key="delete"
                  type="text"
                  danger
                  size="small"
                  onClick={() => deleteTodo(todo.id)}
                >
                  删除
                </Button>,
              ]}
            >
              <List.Item.Meta
                title={
                  <Space>
                    <span
                      style={{
                        textDecoration: todo.completed ? 'line-through' : 'none',
                        color: todo.completed ? '#999' : 'inherit',
                        cursor: 'pointer',
                      }}
                      onClick={() => toggleTodo(todo.id)}
                    >
                      {todo.text}
                    </span>
                    {todo.completed && <Tag color="success">完成</Tag>}
                  </Space>
                }
              />
            </List.Item>
          )}
        />
      )}

      {totalCount > 0 && (
        <div className="todo-stats">
          <Space split={<span>|</span>}>
            <span>
              已完成：{completedCount} / {totalCount}
            </span>
            <span>进度：{Math.round((completedCount / totalCount) * 100)}%</span>
          </Space>
        </div>
      )}
    </div>
  )
}
