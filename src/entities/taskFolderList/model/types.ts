export interface TaskFolderListProps {
  selectTaskFolder: (id: string) => void;
  selectAllTasks: () => void;
  handleDeleteFolder: (id: string) => void;
  handleSelectAllTasksKey: (e: React.KeyboardEvent<HTMLSpanElement>) => void;
  handleSelectTaskFolderKey: (e: React.KeyboardEvent<HTMLLIElement>, id: string) => void;
  handleDeleteFolderKey: (e: React.KeyboardEvent<HTMLSpanElement>, id: string) => void;
  tasksContainerRef: React.RefObject<HTMLDivElement | null>;
  setShowSidebar: React.Dispatch<React.SetStateAction<boolean>>;
  taskFolderListRef: React.RefObject<HTMLDivElement | null>;
}
