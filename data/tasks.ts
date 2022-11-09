export interface Task {
  id: number;
  taskText: string;
  done: boolean;
}

export const initialTasks: Task[] = [
  { id: 0, taskText: "Philosopher’s Path", done: true },
  { id: 1, taskText: "Visit the temple", done: false },
  { id: 2, taskText: "Drink matcha", done: false },
];
