import React, { useState } from "react";
export default function MovingDot() {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });
  return (
    <div
      onPointerMove={(e: React.MouseEvent) => {
        setPosition({
          x: e.clientX,
          y: e.clientY,
        });
      }}
      className="relative w-screen h-screen bg-slate-500"
    >
      <div
        className="bg-red-600 w-[20px] h-[20px] rounded-full -left-2 -top-2 absolute"
        style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
      />
    </div>
  );
}
