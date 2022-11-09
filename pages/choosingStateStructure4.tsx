import { useState } from "react";
import { letters } from "../data/letters";
import Letter from "../components/Letter";
import next from "next";

export default function MailClient() {
  const [selectedIds, setSelectedIds] = useState(new Set());

  const selectedCount = selectedIds.size;

  function handleToggle(toggledId: number) {
    const nextIds = new Set(selectedIds);
    if (nextIds.has(toggledId)) {
      nextIds.delete(toggledId);
    } else {
      nextIds.add(toggledId);
    }
    setSelectedIds(nextIds);
  }

  return (
    <div className="max-w-xl m-12 p-4 border rounded border-gray-200">
      <h2 className="text-xl font-bold">Inbox</h2>
      <ul>
        {letters.map((letter) => (
          <Letter
            key={letter.id}
            letter={letter}
            isSelected={selectedIds.has(letter.id)}
            onToggle={handleToggle}
          />
        ))}
        <div className="mt-1">
          <hr />
          <p>
            <b>You selected {selectedCount} letters</b>
          </p>
        </div>
      </ul>
    </div>
  );
}
