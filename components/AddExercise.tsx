import { useState } from "react";

interface Props {
  onAddExercise: (ex: string) => void;
}

export default function AddExercise(props: Props) {
  const { onAddExercise } = props;
  const [exerciseName, setExerciseName] = useState("");
  return (
    <>
      <input
        className="py-1 pl-1 border border-gray-500 rounded"
        type="text"
        placeholder="exercise"
        value={exerciseName}
        onChange={(e) => setExerciseName(e.target.value)}
      />
      <button
        className="py-1 rounded bg-cyan-700 text-white font-semibold px-2"
        onClick={() => {
          setExerciseName("");
          onAddExercise(exerciseName);
        }}
      >
        Add
      </button>
    </>
  );
}
