import { useState } from "react";
import AddExercise from "../components/AddExercise";

interface Exercise {
  name: string;
  id: number;
  type?: string;
}

let nextId = 0;

export default function Exercy() {
  const [exercises, setExercises] = useState<Exercise[]>([]);

  function handleAddExercise(exerciseName: string) {
    setExercises([...exercises, { id: nextId++, name: exerciseName }]);
  }

  return (
    <div className="p-16">
      <AddExercise onAddExercise={handleAddExercise} />
    </div>
  );
}
