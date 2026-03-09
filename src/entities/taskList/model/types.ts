export interface TaskListProps {
  handleTaskCompletedBtn: (id: string) => void;
  handleTaskCompletedKey: (e: React.KeyboardEvent<HTMLSpanElement>, id: string) => void;
}
