import type { Contact } from "../pages/reducerEx";
import type { Action } from "../reducers/messengerReducer";

interface Props {
  contacts: Contact[];
  dispatch: (arg0: Action) => void;
  selectedId: number;
}

export default function ContactList(props: Props) {
  const { contacts, dispatch, selectedId } = props;

  return (
    <section>
      <ul>
        {contacts.map((contact) => (
          <li key={contact.email}>
            <button
              onClick={() => {
                dispatch({
                  type: "changed_selection",
                  contactId: contact.id,
                  message: "",
                });
              }}
              className="px-4 py-2 bg-teal-400 w-24 rounded font-semibold border-slate-700 border hover:bg-teal-500"
            >
              {contact.name}
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}
