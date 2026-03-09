import React from 'react';

import { Router } from './router/router';
import { TasksProvider } from './providers';

import './styles/reset.css';

const App = (): React.JSX.Element => {
  return (
    <TasksProvider>
      <Router />
    </TasksProvider>
  );
};

export default App;
