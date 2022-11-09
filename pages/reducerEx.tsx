import { useReducer } from "react";
import ChatR from "../components/ChatR";
import ContactListR from "../components/ContactListR";
import { initialState, messengerReducer } from "../reducers/messengerReducer";

export default function Messenger() {
  const [state, dispatch] = useReducer(messengerReducer, initialState);
  const message = state.message;
  const contact = contacts.find((c) => c.id === state.selectedId);

  return (
    <div>
      <ContactListR
        contacts={contacts}
        dispatch={dispatch}
        selectedId={state.selectedId}
      />
      <ChatR
        message={message}
        dispatch={dispatch}
        contact={contact ?? contacts[0]}
      />
    </div>
  );
}

export interface Contact {
  id: number;
  name: string;
  email: string;
}

const contacts: Contact[] = [
  { id: 0, name: "Gripper", email: "gripper@x.com" },
  { id: 1, name: "Gulio", email: "gulio@y.com" },
  { id: 2, name: "Harold", email: "hhh@gmail.com" },
];
