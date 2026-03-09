import React from 'react';

import styles from './Sidebar.module.css';
import { TaskFolderList } from '@/entities/taskFolderList';
import { TaskFolderAddForm } from '@/entities/taskFolderAddForm/ui/TaskFolderAddForm';
import { useTaskFolder } from '@/features/manageTasksFolders';
import type { SidebarProps } from '../model/types';

export const Sidebar = ({ tasksContainerRef }: SidebarProps): React.JSX.Element => {
  const [showSidebar, setShowSidebar] = React.useState<boolean>(false);

  const handleShowSidebarBtn = (): void => {
    setShowSidebar(!showSidebar);
  };

  const {
    selectTaskFolder,
    selectAllTasks,
    handleDeleteFolder,
    isFolderAddMode,
    folderName,
    setFolderName,
    selectedColors,
    handleFolderAddBtn,
    handleFolderColor,
    handleAddNewFolder,
    handleCloseAddFolderForm,
    handleAddNewFolderKey,
    handleSelectAllTasksKey,
    handleSelectTaskFolderKey,
    handleDeleteFolderKey,
    handleCloseAddFolderFormKey,
    handleFolderColorKey,
    folderAddInputRef,
    taskFolderListRef,
  } = useTaskFolder();
  return (
    <>
      <button
        onClick={handleShowSidebarBtn}
        className={`${styles.burgerBtn} ${showSidebar ? styles.closeBurgerBtn : styles.burgerBtn}`}
        type="button"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      <div className={`${styles.sidebar} ${showSidebar ? styles.showSidebar : ''}`}>
        <TaskFolderList
          selectTaskFolder={selectTaskFolder}
          selectAllTasks={selectAllTasks}
          handleDeleteFolder={handleDeleteFolder}
          handleSelectAllTasksKey={handleSelectAllTasksKey}
          handleSelectTaskFolderKey={handleSelectTaskFolderKey}
          handleDeleteFolderKey={handleDeleteFolderKey}
          tasksContainerRef={tasksContainerRef}
          setShowSidebar={setShowSidebar}
          taskFolderListRef={taskFolderListRef}
        />
        <TaskFolderAddForm
          isFolderAddMode={isFolderAddMode}
          folderName={folderName}
          setFolderName={setFolderName}
          selectedColors={selectedColors}
          handleFolderAddBtn={handleFolderAddBtn}
          handleFolderColor={handleFolderColor}
          handleAddNewFolder={handleAddNewFolder}
          handleCloseAddFolderForm={handleCloseAddFolderForm}
          handleAddNewFolderKey={handleAddNewFolderKey}
          handleCloseAddFolderFormKey={handleCloseAddFolderFormKey}
          folderAddInputRef={folderAddInputRef}
          handleFolderColorKey={handleFolderColorKey}
        />
      </div>
    </>
  );
};
