import { useState } from "react";

interface Artist {
  id: number;
  name: string;
}

let nextId = 0;

export default function List() {
  const [name, setName] = useState("");
  const [artists, setArtists] = useState<Artist[]>([]);

  function handleReverse() {
    const reverseList = [...artists];
    reverseList.reverse();
    setArtists(reverseList);
  }

  return (
    <div className="p-16 max-w-md border border-slate-300 rounded mx-auto mt-24">
      <h1 className="text-xl font-semibold">Exciting sculptors</h1>
      <div className="flex space-x-2">
        <input
          className="shadow-sm py-1 pl-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 border rounded-md"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <div>
          <button
            className="bg-cyan-700 rounded py-1 text-white font-bold px-3"
            onClick={() => {
              setName("");
              setArtists([...artists, { id: nextId++, name: name }]);
            }}
          >
            Add
          </button>
        </div>
      </div>
      <ul className="space-y-2 mt-4">
        {artists.map((artist) => (
          <li key={artist.id}>
            {artist.name}{" "}
            <button
              className="py-[2px] px-[4px] text-xs font-medium bg-gray-200 rounded-sm"
              onClick={() => {
                setArtists(artists.filter((a) => a.id !== artist.id));
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
      <div className="mt-4">
        <button
          className="bg-gray-200 rounded border border-gray-400 py-1 px-2"
          onClick={handleReverse}
        >
          Reverse
        </button>
      </div>
    </div>
  );
}
