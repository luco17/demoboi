import React from "react";

export default function App() {
  return (
    <Toolbar
      onPlayMovie={() => alert("Playing")}
      onUploadImage={() => alert("Upload in progress")}
    />
  );
}

interface ButtonKids {
  children: string | string[];
  onSmash: React.MouseEventHandler<HTMLElement>;
}

function Button({ onSmash, children }: ButtonKids) {
  return (
    <button
      className="rounded bg-slate-300 shadow p-3 font-semibold hover:shadow-lg hover:bg-slate-400 hover:text-white"
      onClick={onSmash}
    >
      {children}
    </button>
  );
}

interface ToolKids {
  onPlayMovie: React.MouseEventHandler<HTMLButtonElement>;
  onUploadImage: React.MouseEventHandler<HTMLButtonElement>;
}

function Toolbar({ onPlayMovie, onUploadImage }: ToolKids) {
  return (
    <div className="grid place-items-center h-screen">
      <div className="space-x-8">
        <Button onSmash={onPlayMovie}>Play Movie</Button>
        <Button onSmash={onUploadImage}>Upload Image</Button>
      </div>
    </div>
  );
}
