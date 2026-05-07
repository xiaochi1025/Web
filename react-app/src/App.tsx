import React from 'react';
import { AppRouter } from '@/app/router';
import { AppProviders } from '@/app/providers';
import './index.css';

const App: React.FC = () => {
  return (
    <AppProviders>
      <AppRouter />
    </AppProviders>
  );
};

export default App;
