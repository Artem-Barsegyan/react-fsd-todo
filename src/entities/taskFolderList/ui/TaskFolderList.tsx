import React from 'react';

import taskDelete from '@shared/assets/icons/task-delete-icon.svg';
import type { TaskFolderListProps } from '../model/types';
import { useTasksContext } from '@/app/providers/TasksContext';

import styles from './TaskFolderList.module.css';

export const TaskFolderList = ({
  selectTaskFolder,
  selectAllTasks,
  handleDeleteFolder,
  handleSelectAllTasksKey,
  handleSelectTaskFolderKey,
  handleDeleteFolderKey,
  tasksContainerRef,
  taskFolderListRef,
  setShowSidebar,
}: TaskFolderListProps): React.JSX.Element => {
  const { tasks, isTaskList } = useTasksContext();

  return (
    <div ref={taskFolderListRef} className={styles.folderList}>
      {tasks.length !== 0 && (
        <span
          tabIndex={0}
          aria-label="Показать все папки с задачами"
          className={isTaskList ? `${styles.activeFolder}` : ''}
          onClick={() => {
            selectAllTasks();
            setShowSidebar(false);
          }}
          onKeyDown={(e) => {
            handleSelectAllTasksKey(e);
            if (e.key === 'Enter') {
              setTimeout(() => {
                tasksContainerRef.current?.focus();
                setShowSidebar(false);
              }, 0);
            }
          }}
        >
          Все задачи
        </span>
      )}
      <ul tabIndex={0} aria-label="Список папок">
        {tasks.map((item) => {
          return (
            <li
              tabIndex={0}
              aria-label={`Папка: ${item.folder.name}`}
              className={item.isSelected ? `${styles.activeFolder}` : ''}
              onClick={() => {
                selectTaskFolder(item.folder.id);
                setShowSidebar(false);
              }}
              onKeyDown={(e) => {
                handleSelectTaskFolderKey(e, item.folder.id);
                if (e.key === 'Enter') {
                  setTimeout(() => {
                    tasksContainerRef.current?.focus();
                    setShowSidebar(false);
                  }, 0);
                }
              }}
              key={item.folder.id}
            >
              <span style={{ backgroundColor: `${item.folder.color}` }}></span>
              {item.folder.name}
              <span
                role="button"
                tabIndex={0}
                aria-label={`Удалить папку ${item.folder.name}`}
                title="Удалить папку"
                onClick={(e) => {
                  e.stopPropagation();
                  handleDeleteFolder(item.folder.id);
                }}
                onKeyDown={(e) => {
                  e.stopPropagation();
                  handleDeleteFolderKey(e, item.folder.id);
                }}
              >
                <img src={taskDelete} alt="delete" />
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
