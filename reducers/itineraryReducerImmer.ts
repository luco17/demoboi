import { Loc } from "../data/locs";

export type Action =
  | { type: "added_item"; id: number; locationName: string }
  | { type: "edited_item"; location: Loc }
  | { type: "deleted_item"; id: number };

export function locationReducer(draft: Loc[], action: Action) {
  switch (action.type) {
    case "added_item": {
      draft.push({
        id: action.id,
        locationName: action.locationName,
        visited: false,
      });
      break;
    }
    case "edited_item": {
      const i = draft.findIndex((l) => l.id === action.location.id);
      draft[i] = action.location;
      break;
    }
    case "deleted_item": {
      return draft.filter((l) => l.id !== action.id);
    }
    default: {
      throw new Error("unknown action: " + action["type"]);
    }
  }
}
