import { useState, useCallback } from 'react'
import { postApi } from '@/api/modules/postApi'
import { Button, Card, Space, Typography, Spin, Alert } from 'antd'
import './ApiExample.css'

const { Title, Paragraph } = Typography

export const ApiExample: React.FC = () => {
  const [data, setData] = useState<any>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const fetchData = useCallback(async () => {
    setLoading(true)
    setError(null)
    try {
      const result = await postApi.getPost(1)
      setData(result)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch')
    } finally {
      setLoading(false)
    }
  }, [])

  return (
    <div className="api-component">
      <Card title="API 示例" size="default">
        <Space direction="vertical" style={{ width: '100%' }}>
          <Button onClick={fetchData} loading={loading} type="primary">
            {loading ? '加载中...' : '获取数据'}
          </Button>

          {error && (
            <Alert message="请求失败" description={error} type="error" showIcon />
          )}

          {loading && <Spin tip="加载中..." />}

          {data && (
            <Card type="inner" title="响应数据" size="small">
              <Paragraph>
                <strong>ID:</strong> {data.id}
              </Paragraph>
              <Paragraph>
                <strong>标题:</strong>
                <Title level={5}>{data.title}</Title>
              </Paragraph>
              <Paragraph>
                <strong>内容:</strong>
                <Paragraph type="secondary">{data.body}</Paragraph>
              </Paragraph>
            </Card>
          )}
        </Space>
      </Card>
    </div>
  )
}

