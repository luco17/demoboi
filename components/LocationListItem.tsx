import { useState } from "react";
import { Loc } from "../data/locs";
import Button from "./Button";

interface ListProps {
  location: Loc;
  onDelete: (id: number) => void;
  onEdit: (location: Loc) => void;
}

export function ListItem(props: ListProps) {
  const [editing, setEditing] = useState(false);
  const { location, onDelete, onEdit } = props;
  const { id, locationName } = location;

  return (
    <div className="flex space-x-1">
      <input
        type="checkbox"
        checked={location.visited}
        onChange={(e) => {
          onEdit({
            ...location,
            visited: e.target.checked,
          });
        }}
      />
      {editing ? (
        <input
          className="pl-2 border mr-2 rounded-sm border-gray-600"
          value={location.locationName}
          onChange={(e) =>
            onEdit({
              ...location,
              locationName: e.target.value,
            })
          }
        />
      ) : (
        <p>{locationName}</p>
      )}
      <Button
        buttonText={editing ? "Save" : "Edit"}
        onClick={() => setEditing(!editing)}
      />
      {editing || <Button buttonText="Delete" onClick={() => onDelete(id)} />}
    </div>
  );
}
