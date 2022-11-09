import { useState } from "react";
import Button from "./Button";

interface Props {
  onClick: (location: string) => void;
}

export default function AddLocation(props: Props) {
  const [text, setText] = useState("");
  const { onClick } = props;

  return (
    <div className="flex">
      <input
        placeholder="Add task"
        value={text}
        className="pl-2 border mr-2 rounded-sm border-gray-600"
        onChange={(e) => setText(e.target.value)}
      />
      <Button
        buttonText="add"
        onClick={() => {
          setText("");
          onClick(text);
        }}
      />
    </div>
  );
}
