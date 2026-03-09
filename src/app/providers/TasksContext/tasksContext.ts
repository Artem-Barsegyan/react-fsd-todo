import React from 'react';

import type { TaskCard } from '@/entities/task';

export interface TaskContextValue {
  tasks: TaskCard[];
  setTasks: React.Dispatch<React.SetStateAction<TaskCard[]>>;
  isTaskList: boolean;
  setIsTaskList: React.Dispatch<React.SetStateAction<boolean>>;
  isTask: boolean;
  setIsTask: React.Dispatch<React.SetStateAction<boolean>>;
}

export const TasksContext = React.createContext<TaskContextValue | undefined>(undefined);
