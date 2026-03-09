import React from 'react';

import type { TaskCard } from '@/entities/task';
import { TasksContext } from './tasksContext';
import { loadTasks, saveTasks } from '@/shared/lib';

interface TaskProviderProps {
  children: React.ReactNode;
}

export const TasksProvider = ({ children }: TaskProviderProps) => {
  const [tasks, setTasks] = React.useState<TaskCard[]>(loadTasks<TaskCard>());
  const [isTaskList, setIsTaskList] = React.useState<boolean>(false);
  const [isTask, setIsTask] = React.useState<boolean>(false);

  React.useEffect(() => {
    saveTasks<TaskCard>(tasks);
  }, [tasks]);

  return (
    <TasksContext value={{ tasks, setTasks, isTaskList, setIsTaskList, isTask, setIsTask }}>
      {children}
    </TasksContext>
  );
};
