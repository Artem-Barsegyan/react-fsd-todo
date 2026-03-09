import React from 'react';

import { TasksContext, type TaskContextValue } from './tasksContext';

export const useTasksContext = (): TaskContextValue => {
  const context = React.useContext(TasksContext);

  if (context === undefined) {
    throw new Error('useTasks must be used within a TaskProvider');
  }

  return context;
};
