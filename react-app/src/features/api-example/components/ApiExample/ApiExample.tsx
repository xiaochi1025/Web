import { useState, useCallback } from 'react';
import { postApi } from '@/api/modules/postApi';
import { Button, Card } from '@/shared/ui';
import './ApiExample.css';

export const ApiExample: React.FC = () => {
  const [data, setData] = useState<Post | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchData = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const result = await postApi.getPost(1);
      setData(result);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch');
    } finally {
      setLoading(false);
    }
  }, []);

  return (
    <div className="api-component">
      <Card title="API Example">
        <Button onClick={fetchData} disabled={loading} variant="primary">
          {loading ? 'Loading...' : 'Fetch Data'}
        </Button>

        {error && <div className="error-message">Error: {error}</div>}

        {data && (
          <div className="data-display">
            <h4>{data.title}</h4>
            <p>{data.body}</p>
          </div>
        )}
      </Card>
    </div>
  );
};
