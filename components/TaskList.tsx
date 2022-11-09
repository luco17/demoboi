import { useState } from "react";
import type { Task } from "../data/tasks";
import Button from "./Button";
import { useTasks, useTasksDispatch } from "../contexts/TaskContext";

export default function TaskList() {
  const tasks = useTasks();
  return (
    <ul className="space-y-2 mt-4">
      {tasks?.map((task: Task) => (
        <li key={task.id}>
          <TaskItem id={task.id} taskText={task.taskText} done={task.done} />
        </li>
      ))}
    </ul>
  );
}

function TaskItem(task: Task) {
  const [editing, setEditing] = useState(false);
  const { taskText, done, id } = task;
  const dispatch = useTasksDispatch();

  return (
    <div className="flex space-x-1">
      <input
        type="checkbox"
        checked={done}
        onChange={(e) => {
          dispatch?.({
            type: "edit_task",
            task: {
              ...task,
              done: e.target.checked,
            },
          });
        }}
      />
      {editing ? (
        <input
          type="text"
          className="pl-2 border mr-2 rounded-sm border-gray-600"
          value={taskText}
          onChange={(e) => {
            dispatch?.({
              type: "edit_task",
              task: {
                ...task,
                taskText: e.target.value,
              },
            });
          }}
        />
      ) : (
        <p>{taskText}</p>
      )}
      <Button
        buttonText={editing ? "Save" : "Edit"}
        onClick={() => setEditing(!editing)}
      />
      {editing || (
        <Button
          buttonText="Delete"
          onClick={() =>
            dispatch?.({
              type: "delete_task",
              id: id,
            })
          }
        />
      )}
    </div>
  );
}
