import { Loc } from "../data/locs";

export type Action =
  | { type: "added_item"; id: number; locationName: string }
  | { type: "edited_item"; location: Loc }
  | { type: "deleted_item"; id: number };

export function locationReducer(locations: Loc[], action: Action) {
  switch (action.type) {
    case "added_item": {
      return [
        ...locations,
        {
          id: action.id,
          locationName: action.locationName,
          visited: false,
        },
      ];
    }
    case "edited_item": {
      return locations.map((location) => {
        if (location.id === action.location.id) {
          return action.location;
        } else {
          return location;
        }
      });
    }
    case "deleted_item": {
      return locations.filter((loc) => loc.id !== action.id);
    }
    default: {
      throw new Error("unknown action: " + action["type"]);
    }
  }
}
