import { Task } from "../data/tasks";

export type Action =
  | { type: "add_task"; id: number; taskText: string }
  | { type: "edit_task"; task: Task }
  | { type: "delete_task"; id: number };

export function tasksReducer(tasks: Task[], action: Action) {
  switch (action.type) {
    case "add_task": {
      return [
        ...tasks,
        {
          id: action.id,
          taskText: action.taskText,
          done: false,
        },
      ];
    }
    case "edit_task": {
      return tasks.map((t: Task) => {
        if (t.id === action.task.id) {
          return action.task;
        } else {
          return t;
        }
      });
    }
    case "delete_task": {
      return tasks.filter((t) => t.id !== action.id);
    }
    default: {
      throw new Error("Unknown action: " + action["type"]);
    }
  }
}
