import { useState } from "react";
import Image from "next/future/image";
import { sculptureList } from "../data/sculptures";

export default function Gallery() {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);

  function handleNextClick() {
    setIndex(index + 1);
  }

  function handleMoreClick() {
    setShowMore(!showMore);
  }

  interface ButtyProps {
    onClick: React.MouseEventHandler<HTMLButtonElement>;
    children: string | string[];
  }

  function Butty({ onClick, children }: ButtyProps) {
    return (
      <button
        className="py-1 px-2 rounded bg-slate-700 border border-slate-400 text-white block"
        onClick={onClick}
      >
        {children}
      </button>
    );
  }

  let sculpture = sculptureList[index];
  return (
    <div className="h-screen bg-slate-900 pt-24">
      <div className="mx-auto p-4 rounded-md  shadow border border-slate-300 gb-slate-800 space-y-2 w-1/4">
        <Butty onClick={handleNextClick}>Next</Butty>
        <h2 className="text-lg font-bold text-white">
          <i>{sculpture.name}</i> by {sculpture.artist}
        </h2>
        <h3 className="text-md font-medium text-white">
          ({index + 1} of {sculptureList.length})
        </h3>
        <Butty onClick={handleMoreClick}>
          {showMore ? "Hide" : "Show"} details
        </Butty>
        {showMore && <p className="text-white">{sculpture.description}</p>}
        <Image
          src={sculpture.url}
          alt={sculpture.alt}
          width={80 * 2}
          height={80 * 2}
          className="rounded-md"
        />
      </div>
    </div>
  );
}
