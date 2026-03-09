import React from 'react';

import editIcon from '@shared/assets/icons/edit-icon.svg';
import saveIcon from '@shared/assets/icons/save-icon.svg';
import taskDelete from '@shared/assets/icons/task-delete-icon.svg';
import type { TaskProps } from '../model/types';
import { useTasksContext } from '@/app/providers/TasksContext';

import styles from './Task.module.css';

export const Task = ({
  addValue,
  setAddValue,
  addInputRef,
  handleTaskAddBtn,
  handleTaskAdd,
  handleTaskClose,
  handleTaskAddKey,
  handleTaskDelete,
  handleTaskCompleted,
  currentTaskTitle,
  setCurrentTaskTitle,
  handleTitleEdit,
  handleTitleSave,
  editInputRef,
  handleTitleSaveKey,
  handleTitleEditKey,
  handleTaskCompletedKey,
  handleTaskDeleteKey,
}: TaskProps): React.JSX.Element => {
  const { tasks } = useTasksContext();
  const currentTask = tasks.filter((item) => item.isSelected);

  return (
    <>
      {currentTask.map((item) => {
        return (
          <div key={item.folder.id} className={styles.taskItem}>
            <>
              <div className={styles.taskTitle}>
                {!item.isEditTitleMode ? (
                  <>
                    <span
                      tabIndex={0}
                      aria-label={`Название папки: ${item.title}`}
                      style={{ color: `${item.folder.color}` }}
                    >
                      {item.title}
                    </span>
                    <span
                      role="button"
                      title="Редактировать название папки"
                      tabIndex={0}
                      aria-label="Редактировать название папки"
                      onKeyDown={(e) => handleTitleEditKey(e, item.folder.id, item.title)}
                      onClick={() => handleTitleEdit(item.folder.id, item.title)}
                    >
                      <img src={editIcon} alt="edit" />
                    </span>
                  </>
                ) : (
                  <>
                    <input
                      aria-label="Поле ввода для изменения названия папки"
                      style={{ color: `${item.folder.color}` }}
                      ref={editInputRef}
                      name="titleValue"
                      type="text"
                      value={currentTaskTitle}
                      onChange={(e) => setCurrentTaskTitle(e.target.value)}
                      onKeyDown={(e) => handleTitleSaveKey(e, item.folder.id, currentTaskTitle)}
                    />
                    <span
                      role="button"
                      title="Сохранить название папки"
                      aria-label="Сохранить название папки"
                      tabIndex={0}
                      onClick={() => handleTitleSave(item.folder.id, currentTaskTitle)}
                      onKeyDown={(e) => handleTitleSaveKey(e, item.folder.id, currentTaskTitle)}
                    >
                      <img src={saveIcon} alt="edit" />
                    </span>
                  </>
                )}
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
                          onClick={() => handleTaskCompleted(item.id)}
                          className={item.isCompleted ? `${styles.completedTask}` : ''}
                          onKeyDown={(e) => handleTaskCompletedKey(e, item.id)}
                        ></span>
                        {item.task}
                        <img
                          role="button"
                          tabIndex={0}
                          title="Удалить задачу из папки"
                          onClick={() => handleTaskDelete(item.id)}
                          src={taskDelete}
                          alt="delete"
                          onKeyDown={(e) => handleTaskDeleteKey(e, item.id)}
                        />
                      </li>
                    );
                  })}
                </ul>
                {
                  <div className={styles.taskAddForm}>
                    {!item.isEditTaskMode ? (
                      <button
                        className={`btn ${styles.addBtn}`}
                        type="button"
                        onClick={() => handleTaskAddBtn(item.folder.id)}
                      >
                        Новая задача
                      </button>
                    ) : (
                      <>
                        <input
                          name="addValue"
                          ref={addInputRef}
                          type="text"
                          placeholder="Текст задачи"
                          value={addValue}
                          onChange={(e) => setAddValue(e.target.value)}
                          onKeyDown={(e) => handleTaskAddKey(e, item.folder.id, addValue)}
                          aria-label="Поле для добавления новой задачи в папку"
                        />
                        <div className={styles.taskAddButtons}>
                          <button
                            style={{ backgroundColor: `${item.folder.color}` }}
                            type="button"
                            onClick={() => handleTaskAdd(item.folder.id, addValue)}
                          >
                            Добавить задачу
                          </button>
                          <button type="button" onClick={() => handleTaskClose(item.folder.id)}>
                            Отмена
                          </button>
                        </div>
                      </>
                    )}
                  </div>
                }
              </div>
            </>
          </div>
        );
      })}
    </>
  );
};
