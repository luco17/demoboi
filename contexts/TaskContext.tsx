import { createContext, useContext, useReducer, Dispatch } from "react";
import { Task, initialTasks } from "../data/tasks";
import { Action, tasksReducer } from "../reducers/tasksReducer";

const TasksContext = createContext<Task[] | null>(null);
const TasksDispatchContext = createContext<Dispatch<Action> | null>(null);

interface Props {
  children: React.ReactNode;
}

export function TasksProvider(props: Props) {
  const { children } = props;
  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);

  return (
    <TasksContext.Provider value={tasks}>
      <TasksDispatchContext.Provider value={dispatch}>
        {children}
      </TasksDispatchContext.Provider>
    </TasksContext.Provider>
  );
}

export function useTasks() {
  return useContext(TasksContext);
}

export function useTasksDispatch() {
  return useContext(TasksDispatchContext);
}
