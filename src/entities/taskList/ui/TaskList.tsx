import React from 'react';

import { useTasksContext } from '@/app/providers/TasksContext';
import type { TaskListProps } from '../model/types';

import styles from './TaskList.module.css';

export const TaskList = ({
  handleTaskCompletedBtn,
  handleTaskCompletedKey,
}: TaskListProps): React.JSX.Element => {
  const { tasks } = useTasksContext();

  return (
    <>
      {tasks.map((item) => {
        return (
          <div key={item.folder.id} className={styles.taskItem}>
            <div className={styles.taskTitle}>
              <span
                tabIndex={0}
                aria-label={`Название папки: ${item.title}`}
                style={{ color: `${item.folder.color}` }}
              >
                {item.title}
              </span>
            </div>
            <div
              tabIndex={0}
              aria-label={`Список задач внутри папки ${item.folder.name}`}
              className={styles.taskList}
            >
              <ul>
                {item.taskList.map((item) => {
                  if (!item.task) return null;
                  return (
                    <li tabIndex={0} aria-label={`Задача: ${item.task}`} key={item.id}>
                      <span
                        tabIndex={0}
                        aria-label={
                          item.isCompleted
                            ? 'Отметить задачу в папке невыполненной'
                            : 'Отметить задачу в папке выполненной'
                        }
                        onClick={() => handleTaskCompletedBtn(item.id)}
                        className={item.isCompleted ? `${styles.completedTask}` : ''}
                        onKeyDown={(e) => handleTaskCompletedKey(e, item.id)}
                      ></span>
                      {item.task}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        );
      })}
    </>
  );
};
