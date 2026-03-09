import type { FolderColor } from '@/entities/taskFolderAddForm';

export interface UseTaskFolderReturn {
  isFolderAddMode: boolean;
  setIsFolderAddMode: React.Dispatch<React.SetStateAction<boolean>>;
  folderName: string;
  setFolderName: React.Dispatch<React.SetStateAction<string>>;
  selectedColors: FolderColor[];
  setSelectedColors: React.Dispatch<React.SetStateAction<FolderColor[]>>;
  handleFolderAddBtn: () => void;
  handleFolderColor: (id: string) => void;
  handleAddNewFolder: () => void;
  handleCloseAddFolderForm: () => void;
  handleAddNewFolderKey: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  selectTaskFolder: (id: string) => void;
  selectAllTasks: () => void;
  handleDeleteFolder: (id: string) => void;
  handleSelectAllTasksKey: (e: React.KeyboardEvent<HTMLSpanElement>) => void;
  handleSelectTaskFolderKey: (e: React.KeyboardEvent<HTMLLIElement>, id: string) => void;
  handleDeleteFolderKey: (e: React.KeyboardEvent<HTMLSpanElement>, id: string) => void;
  handleCloseAddFolderFormKey: (e: React.KeyboardEvent<HTMLSpanElement>) => void;
  handleFolderColorKey: (e: React.KeyboardEvent<HTMLSpanElement>, id: string) => void;
  folderAddInputRef: React.RefObject<HTMLInputElement | null>;
  taskFolderListRef: React.RefObject<HTMLDivElement | null>;
}
