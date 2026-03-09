export interface FolderColor {
  id: string;
  color: string;
  colorName: string;
  isActive: boolean;
}

export interface TaskFolderAddFormProps {
  isFolderAddMode: boolean;
  folderName: string;
  setFolderName: React.Dispatch<React.SetStateAction<string>>;
  selectedColors: FolderColor[];
  handleFolderAddBtn: () => void;
  handleFolderColor: (id: string) => void;
  handleAddNewFolder: () => void;
  handleCloseAddFolderForm: () => void;
  handleAddNewFolderKey: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  handleCloseAddFolderFormKey: (e: React.KeyboardEvent<HTMLSpanElement>) => void;
  handleFolderColorKey: (e: React.KeyboardEvent<HTMLSpanElement>, id: string) => void;
  folderAddInputRef: React.RefObject<HTMLInputElement | null>;
}
