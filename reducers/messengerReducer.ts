export const initialState: State = {
  selectedId: 0,
  message: "Hello there",
};

interface State {
  selectedId: number;
  message: string;
}

export type Action =
  | { type: "changed_selection"; contactId: number; message: string }
  | { type: "edited_message"; message: string };

export function messengerReducer(state: State, action: Action) {
  switch (action.type) {
    case "changed_selection": {
      return {
        ...state,
        selectedId: action.contactId,
        message: "",
      };
    }
    case "edited_message": {
      return {
        ...state,
        message: action.message,
      };
    }
    default: {
      throw Error("unknown action: " + action["type"]);
    }
  }
}
