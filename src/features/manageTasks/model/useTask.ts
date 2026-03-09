import React from 'react';

import type { UseTasksReturn } from './types';
import { useTasksContext } from '@/app/providers/TasksContext';
import type { TaskList } from '@/entities/task';
import { generateId } from '@/shared/lib';

export const useTasks = (): UseTasksReturn => {
  const [addValue, setAddValue] = React.useState<string>('');
  const addInputRef = React.useRef<HTMLInputElement>(null);
  const { tasks, setTasks } = useTasksContext();

  const handleTaskAddBtn = (id: string): void => {
    const newArr = tasks.map((item) => {
      if (item.folder.id === id) {
        return { ...item, isEditTaskMode: true };
      } else {
        return { ...item, isEditTaskMode: false };
      }
    });
    setTasks(newArr);
    setTimeout(() => {
      addInputRef.current?.focus();
    }, 0);
  };

  const handleTaskAdd = (id: string, value: string): void => {
    const newTask: TaskList = {
      id: generateId(),
      task: value,
      isCompleted: false,
    };
    const newArr = tasks.map((item) => {
      if (item.folder.id === id) {
        return {
          ...item,
          folder: { ...item.folder },
          title: item.title,
          taskList: [...item.taskList, newTask],
          isEditTitleMode: item.isEditTitleMode,
          isEditTaskMode: true,
          isSelected: item.isSelected,
        };
      } else {
        return item;
      }
    });
    setTasks(newArr);
    setAddValue('');
    setTimeout(() => {
      addInputRef.current?.focus();
    }, 0);
  };

  const handleTaskClose = (id: string): void => {
    const newArr = tasks.map((item) => {
      if (item.folder.id === id) {
        return {
          ...item,
          folder: { ...item.folder },
          title: item.title,
          taskList: [...item.taskList],
          isEditTitleMode: item.isEditTitleMode,
          isEditTaskMode: false,
          isSelected: item.isSelected,
        };
      } else {
        return item;
      }
    });
    setTasks(newArr);
    setAddValue('');
  };

  const handleTaskAddKey = (
    e: React.KeyboardEvent<HTMLInputElement>,
    id: string,
    value: string
  ): void => {
    if (e.key === 'Enter') {
      handleTaskAdd(id, value);
    }
  };

  const handleTaskDelete = (id: string): void => {
    const newArr = tasks.map((item) => {
      const newTaskArr = item.taskList.filter((item) => item.id !== id);
      return { ...item, taskList: [...newTaskArr] };
    });
    setTasks(newArr);
  };

  const handleTaskCompleted = (id: string): void => {
    const newArr = tasks.map((item) => {
      const newTaskArr = item.taskList.map((item) => {
        if (item.id === id) {
          return { ...item, isCompleted: !item.isCompleted };
        } else {
          return item;
        }
      });
      return { ...item, taskList: [...newTaskArr] };
    });
    setTasks(newArr);
  };

  const handleTaskCompletedKey = (e: React.KeyboardEvent<HTMLSpanElement>, id: string): void => {
    if (e.key === 'Enter') {
      handleTaskCompleted(id);
    }
  };

  const handleTaskDeleteKey = (e: React.KeyboardEvent<HTMLImageElement>, id: string): void => {
    if (e.key === 'Enter') {
      handleTaskDelete(id);
    }
  };

  return {
    addValue,
    setAddValue,
    addInputRef,
    handleTaskAddBtn,
    handleTaskAdd,
    handleTaskClose,
    handleTaskAddKey,
    handleTaskDelete,
    handleTaskCompleted,
    handleTaskCompletedKey,
    handleTaskDeleteKey,
  };
};
