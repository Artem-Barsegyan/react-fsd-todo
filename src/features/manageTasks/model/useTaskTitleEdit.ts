import React from 'react';

import type { UseTaskTitleEditReturn } from './types';
import { useTasksContext } from '@/app/providers/TasksContext';

export const useTaskTitleEdit = (): UseTaskTitleEditReturn => {
  const [currentTaskTitle, setCurrentTaskTitle] = React.useState<string>('');
  const { tasks, setTasks } = useTasksContext();
  const editInputRef = React.useRef<HTMLInputElement>(null);

  const handleTitleEdit = (id: string, currentTitle: string): void => {
    const newArr = tasks.map((item) => {
      if (item.folder.id === id) {
        setCurrentTaskTitle(currentTitle);
        return { ...item, isEditTitleMode: true };
      } else {
        return { ...item, isEditTitleMode: false };
      }
    });
    setTasks(newArr);
    setTimeout(() => {
      editInputRef.current?.focus();
    }, 0);
  };

  const handleTitleSave = (id: string, newTitle: string): void => {
    const newArr = tasks.map((item) => {
      if (item.folder.id === id) {
        return {
          ...item,
          folder: { ...item.folder, name: newTitle },
          title: newTitle,
          taskList: [...item.taskList],
          isEditTitleMode: false,
          isEditTaskMode: item.isEditTaskMode,
          isSelected: item.isSelected,
        };
      } else {
        return item;
      }
    });
    setTasks(newArr);
  };

  const handleTitleEditKey = (
    e: React.KeyboardEvent<HTMLSpanElement>,
    id: string,
    currentTitle: string
  ): void => {
    if (e.key === 'Enter') {
      handleTitleEdit(id, currentTitle);
    }
  };

  const handleTitleSaveKey = (
    e: React.KeyboardEvent<HTMLElement>,
    id: string,
    newTitle: string
  ): void => {
    if (e.key === 'Enter') {
      handleTitleSave(id, newTitle);
    }
  };

  return {
    currentTaskTitle,
    setCurrentTaskTitle,
    handleTitleEdit,
    handleTitleSave,
    editInputRef,
    handleTitleSaveKey,
    handleTitleEditKey,
  };
};
