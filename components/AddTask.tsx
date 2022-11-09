import { useState } from "react";
import Button from "./Button";
import { useTasksDispatch } from "../contexts/TaskContext";

let nextId = 3;

export default function AddTask() {
  const [text, setText] = useState("");
  const dispatch = useTasksDispatch();

  return (
    <div className="flex">
      <input
        placeholder="Add task"
        type="text"
        value={text}
        className="pl-2 border mr-2 rounded-sm border-gray-600"
        onChange={(e) => setText(e.target.value)}
      />
      <Button
        buttonText="Add"
        onClick={() => {
          setText("");
          dispatch?.({
            type: "add_task",
            id: nextId++,
            taskText: text,
          });
        }}
      />
    </div>
  );
}
