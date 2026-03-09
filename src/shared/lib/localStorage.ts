export const loadTasks = <T>(): T[] => {
  const saved = localStorage.getItem('tasks');
  return saved ? JSON.parse(saved) : [];
};

export const saveTasks = <T>(tasks: T[]): void => {
  localStorage.setItem('tasks', JSON.stringify(tasks));
};
