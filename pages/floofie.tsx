import React, { useState } from "react";

export default function Form() {
  const [name, setName] = useState("");

  function handleNameChange(e: React.ChangeEvent<HTMLInputElement>) {
    setName(e.target.value);
  }

  function handleReset() {
    setName("");
  }

  return (
    <div className="grid place-items-center h-screen">
      <div className="p-4 border border-slate-300 rounded">
        <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
          <input
            placeholder="display name"
            value={name}
            onChange={handleNameChange}
          />
          <h1 className="font-bold text-xl">Hi, {name}, welcome to the game</h1>
          <button
            className="px-2 py-1 bg-cyan-700 rounded text-white"
            onClick={handleReset}
          >
            Reset
          </button>
        </form>
      </div>
    </div>
  );
}
