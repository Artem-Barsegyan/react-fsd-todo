import React from 'react';

import { Task } from '@/entities/task';
import { TaskList } from '@/entities/taskList';
import { TasksNotFound, TasksNotSelected } from '@/shared/ui';
import { useTasks, useTaskTitleEdit } from '@/features/manageTasks';
import { useTasksContext } from '@/app/providers/TasksContext';
import type { TasksContainerProps } from '../model/types';

import styles from './TasksContainer.module.css';

export const TasksContainer = ({ tasksContainerRef }: TasksContainerProps): React.JSX.Element => {
  const {
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
  } = useTasks();
  const {
    currentTaskTitle,
    setCurrentTaskTitle,
    handleTitleEdit,
    handleTitleSave,
    editInputRef,
    handleTitleSaveKey,
    handleTitleEditKey,
  } = useTaskTitleEdit();
  const { tasks, isTaskList, isTask } = useTasksContext();

  return (
    <div
      aria-label={
        tasks.find((item) => item.isSelected)
          ? `Задачи папки ${tasks.find((t) => t.isSelected)?.folder.name}`
          : 'Задачи всех папок'
      }
      ref={tasksContainerRef}
      tabIndex={-1}
      className={styles.tasksContainer}
    >
      {!isTask && !isTaskList && tasks.length !== 0 && tasks.every((item) => !item.isSelected) && (
        <TasksNotSelected />
      )}
      {tasks.length === 0 && <TasksNotFound />}
      {isTaskList && !isTask ? (
        <TaskList
          handleTaskCompletedBtn={handleTaskCompleted}
          handleTaskCompletedKey={handleTaskCompletedKey}
        />
      ) : (
        <Task
          addValue={addValue}
          setAddValue={setAddValue}
          addInputRef={addInputRef}
          handleTaskAddBtn={handleTaskAddBtn}
          handleTaskAdd={handleTaskAdd}
          handleTaskClose={handleTaskClose}
          handleTaskAddKey={handleTaskAddKey}
          handleTaskDelete={handleTaskDelete}
          currentTaskTitle={currentTaskTitle}
          setCurrentTaskTitle={setCurrentTaskTitle}
          handleTitleEdit={handleTitleEdit}
          handleTitleSave={handleTitleSave}
          editInputRef={editInputRef}
          handleTitleSaveKey={handleTitleSaveKey}
          handleTaskCompleted={handleTaskCompleted}
          handleTitleEditKey={handleTitleEditKey}
          handleTaskCompletedKey={handleTaskCompletedKey}
          handleTaskDeleteKey={handleTaskDeleteKey}
        />
      )}
    </div>
  );
};
