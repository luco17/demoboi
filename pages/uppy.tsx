import { useState } from "react";

const initialList = [
  { id: 0, title: "Big Bellies", seen: false },
  { id: 1, title: "Lunar Landscape", seen: false },
  { id: 2, title: "Terracotta Army", seen: false },
];

interface ListItem {
  id: number;
  title: string;
  seen: boolean;
}

export default function BucketList() {
  const [myList, setMyList] = useState<ListItem[]>(initialList);
  const [yourList, setYourList] = useState<ListItem[]>(initialList);

  function handleToggleMyList(artworkId: number, nextSeen: boolean) {
    setMyList(
      myList.map((artwork) => {
        if (artwork.id === artworkId) {
          return { ...artwork, seen: nextSeen };
        } else {
          return artwork;
        }
      })
    );
  }

  function handleToggleYourList(artworkId: number, nextSeen: boolean) {
    setYourList(
      yourList.map((artwork) => {
        if (artwork.id === artworkId) {
          return { ...artwork, seen: nextSeen };
        } else return artwork;
      })
    );
  }

  return (
    <div className="p-14 border max-w-lg border-gray-600 rounded mt-24 mx-auto">
      <h1 className="text-xl font-bold">Art bucket list</h1>
      <h2 className="text-lg font-semibold text-gray-600">
        My list of art to see
      </h2>
      <ItemList artworks={myList} onToggle={handleToggleMyList} />
      <h2 className="text-lg font-semibold text-gray-600">
        Your list of art to see
      </h2>
      <ItemList artworks={yourList} onToggle={handleToggleYourList} />
    </div>
  );
}

interface Props {
  artworks: ListItem[];
  onToggle: (id: number, check: boolean) => void;
}

function ItemList(props: Props) {
  const { artworks, onToggle } = props;

  return (
    <ul>
      {artworks.map((artwork) => (
        <li key={artwork.id}>
          <label>
            <input
              className="mr-1"
              type="checkbox"
              checked={artwork.seen}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                onToggle(artwork.id, e.target.checked);
              }}
            />
            {artwork.title}
          </label>
        </li>
      ))}
    </ul>
  );
}
