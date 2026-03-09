import React from 'react';

import type { UseTaskFolderReturn } from './types';
import type { FolderColor } from '@/entities/taskFolderAddForm';
import { useTasksContext } from '@/app/providers/TasksContext';
import { folderColors } from '@/entities/taskFolderAddForm';
import type { TaskCard } from '@/entities/task';
import { generateId } from '@/shared/lib';

export const useTaskFolder = (): UseTaskFolderReturn => {
  const [isFolderAddMode, setIsFolderAddMode] = React.useState<boolean>(false);
  const [folderName, setFolderName] = React.useState<string>('');
  const [selectedColors, setSelectedColors] = React.useState<FolderColor[]>(folderColors);
  const folderAddInputRef = React.useRef<HTMLInputElement>(null);
  const taskFolderListRef = React.useRef<HTMLDivElement>(null);
  const { tasks, setTasks, setIsTaskList, setIsTask } = useTasksContext();

  React.useEffect(() => {
    folderAddInputRef.current?.focus();
  }, [isFolderAddMode]);

  const handleFolderAddBtn = (): void => {
    setIsFolderAddMode(!isFolderAddMode);
  };

  const handleFolderColor = (id: string): void => {
    const newArr = selectedColors.map((item) => {
      if (item.id === id) {
        return { ...item, isActive: item.id === id };
      } else {
        return { ...item, isActive: false };
      }
    });
    setSelectedColors(newArr);
  };

  const handleAddNewFolder = (): void => {
    if (!folderName.trim()) return;
    const folderColor = selectedColors.filter((item) => item.isActive);
    const newTask: TaskCard = {
      folder: {
        id: generateId(),
        name: folderName,
        color: folderColor[0].color,
      },
      title: folderName,
      taskList: [],
      isEditTitleMode: false,
      isEditTaskMode: false,
      isSelected: false,
    };
    setTasks((prev) => {
      const newTasks = prev.map((item) => {
        return { ...item, isSelected: false };
      });
      return [...newTasks, { ...newTask, isSelected: true }];
    });
    setIsFolderAddMode(false);
    setFolderName('');
    setSelectedColors(folderColors);
    setIsTaskList(false);
    setIsTask(true);
    taskFolderListScrollBottom();
  };

  const handleCloseAddFolderForm = (): void => {
    setIsFolderAddMode(false);
  };

  const handleAddNewFolderKey = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === 'Enter') {
      handleAddNewFolder();
      taskFolderListScrollBottom();
    }
  };

  const selectTaskFolder = (id: string): void => {
    const newArr = tasks.map((item) => {
      if (item.folder.id === id) {
        return { ...item, isSelected: true };
      } else {
        return { ...item, isSelected: false };
      }
    });
    setTasks(newArr);
    setIsTaskList(false);
    setIsTask(true);
  };

  const selectAllTasks = (): void => {
    const newArr = tasks.map((item) => {
      return { ...item, isSelected: false };
    });
    setTasks(newArr);
    setIsTaskList(true);
    setIsTask(false);
  };

  const handleDeleteFolder = (id: string): void => {
    setTasks((prev) => prev.filter((item) => item.folder.id !== id));
  };

  const handleSelectAllTasksKey = (e: React.KeyboardEvent<HTMLSpanElement>): void => {
    if (e.key === 'Enter') {
      selectAllTasks();
    }
  };

  const handleSelectTaskFolderKey = (e: React.KeyboardEvent<HTMLLIElement>, id: string): void => {
    if (e.key === 'Enter') {
      selectTaskFolder(id);
    }
  };

  const handleDeleteFolderKey = (e: React.KeyboardEvent<HTMLSpanElement>, id: string): void => {
    if (e.key === 'Enter') {
      handleDeleteFolder(id);
    }
  };

  const handleCloseAddFolderFormKey = (e: React.KeyboardEvent<HTMLSpanElement>): void => {
    if (e.key === 'Enter') {
      setIsFolderAddMode(false);
    }
  };

  const handleFolderColorKey = (e: React.KeyboardEvent<HTMLSpanElement>, id: string): void => {
    if (e.key === 'Enter') {
      handleFolderColor(id);
    }
  };

  function taskFolderListScrollBottom(): void {
    requestAnimationFrame(() => {
      taskFolderListRef.current?.scrollTo({
        top: taskFolderListRef.current.scrollHeight,
        behavior: 'smooth',
      });
    });
  }

  return {
    isFolderAddMode,
    setIsFolderAddMode,
    folderName,
    setFolderName,
    selectedColors,
    setSelectedColors,
    handleFolderAddBtn,
    handleFolderColor,
    handleAddNewFolder,
    handleCloseAddFolderForm,
    handleAddNewFolderKey,
    selectTaskFolder,
    selectAllTasks,
    handleDeleteFolder,
    handleSelectAllTasksKey,
    handleSelectTaskFolderKey,
    handleDeleteFolderKey,
    handleCloseAddFolderFormKey,
    handleFolderColorKey,
    folderAddInputRef,
    taskFolderListRef,
  };
};
