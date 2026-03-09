import React from 'react';

import type { TaskFolderAddFormProps } from '../model/types';
import closeAddFolderForm from '@/shared/assets/icons/close-add-folder-form-icon.svg';

import styles from './TaskFolderAddForm.module.css';

export const TaskFolderAddForm = ({
  isFolderAddMode,
  folderName,
  setFolderName,
  selectedColors,
  handleAddNewFolderKey,
  handleFolderAddBtn,
  handleFolderColor,
  handleAddNewFolder,
  handleCloseAddFolderForm,
  handleCloseAddFolderFormKey,
  handleFolderColorKey,
  folderAddInputRef,
}: TaskFolderAddFormProps): React.JSX.Element => {
  return !isFolderAddMode ? (
    <button className="btn" type="button" onClick={handleFolderAddBtn}>
      Добавить папку
    </button>
  ) : (
    <>
      <button className="btn" type="button" onClick={handleFolderAddBtn}>
        Добавить папку
      </button>
      <div className={styles.taskFolderAddFormWrapper}>
        <div className={styles.taskFolderAddForm}>
          <span
            role="button"
            tabIndex={0}
            title="Закрыть"
            aria-label="Закрыть форму добавления папки"
            onClick={handleCloseAddFolderForm}
            onKeyDown={handleCloseAddFolderFormKey}
          >
            <img src={closeAddFolderForm} alt="close" />
          </span>
          <input
            aria-label="Поле ввода для названия новой папки"
            ref={folderAddInputRef}
            type="text"
            name="folderName"
            placeholder="Название папки"
            value={folderName}
            onChange={(e) => setFolderName(e.target.value)}
            onKeyDown={handleAddNewFolderKey}
          />
          <div
            tabIndex={0}
            aria-label="Выберите цвет для папки"
            className={styles.taskFolderColors}
          >
            {selectedColors.map(({ id, color, colorName, isActive }) => {
              return (
                <span
                  onClick={() => handleFolderColor(id)}
                  onKeyDown={(e) => handleFolderColorKey(e, id)}
                  className={isActive ? styles.activeColor : ''}
                  key={id}
                  style={{ backgroundColor: `${color}` }}
                  tabIndex={0}
                  aria-label={colorName}
                ></span>
              );
            })}
          </div>
          <button onClick={handleAddNewFolder} className={styles.taskFolderBtn} type="button">
            Добавить
          </button>
        </div>
      </div>
    </>
  );
};
