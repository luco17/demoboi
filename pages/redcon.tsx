import AddTask from "../components/AddTask";
import TaskList from "../components/TaskList";
import { TasksProvider } from "../contexts/TaskContext";

export default function TaskApp() {
  return (
    <div className="grid h-screen place-items-center">
      <div className="rounded bg-gray-100 shadow-sm p-6 max-w-sm">
        <h1 className="text-xl font-bold mb-2">Day off in Kyoto!</h1>
        <TasksProvider>
          <AddTask />
          <TaskList />
        </TasksProvider>
        <div className="mt-4">
          <hr />
          <p>visited </p>
        </div>
      </div>
    </div>
  );
}
