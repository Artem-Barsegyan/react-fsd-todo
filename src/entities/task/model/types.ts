export interface TaskFolder {
  id: string;
  name: string;
  color: string;
}

export interface TaskList {
  id: string;
  task: string;
  isCompleted: boolean;
}

export interface TaskCard {
  folder: TaskFolder;
  title: string;
  taskList: TaskList[];
  isEditTitleMode: boolean;
  isEditTaskMode: boolean;
  isSelected: boolean;
}

export interface TaskProps {
  addValue: string;
  setAddValue: React.Dispatch<React.SetStateAction<string>>;
  addInputRef: React.RefObject<HTMLInputElement | null>;
  handleTaskAddBtn: (id: string) => void;
  handleTaskAdd: (id: string, value: string) => void;
  handleTaskClose: (d: string) => void;
  handleTaskAddKey: (e: React.KeyboardEvent<HTMLInputElement>, id: string, value: string) => void;
  handleTaskDelete: (id: string) => void;
  handleTaskCompleted: (id: string) => void;
  currentTaskTitle: string;
  setCurrentTaskTitle: React.Dispatch<React.SetStateAction<string>>;
  handleTitleEdit: (id: string, currentTitle: string) => void;
  handleTitleSave: (id: string, newTitle: string) => void;
  editInputRef: React.RefObject<HTMLInputElement | null>;
  handleTitleSaveKey: (e: React.KeyboardEvent<HTMLElement>, id: string, newTitle: string) => void;
  handleTitleEditKey: (
    e: React.KeyboardEvent<HTMLSpanElement>,
    id: string,
    currentTitle: string
  ) => void;
  handleTaskCompletedKey: (e: React.KeyboardEvent<HTMLSpanElement>, id: string) => void;
  handleTaskDeleteKey: (e: React.KeyboardEvent<HTMLImageElement>, id: string) => void;
}
