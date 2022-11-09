import { Contact } from "../pages/preservo";
import type { Action } from "../reducers/messengerReducer";

interface Props {
  message: string;
  contact: Contact;
  dispatch: (arg0: Action) => void;
}

export default function Chat(props: Props) {
  const { contact, message, dispatch } = props;
  const { name, email } = contact;

  return (
    <section className="border border-gray-500 rounded p-4 max-w-lg">
      <textarea
        value={message}
        placeholder={"Chat to " + name}
        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
          dispatch({
            type: "edited_message",
            message: e.target.value,
          })
        }
        className="border-2 rounded-sm border-slate-699 h-24"
      />
      <br />
      <button className="rounded-md border border-gray-300 bg-white px-3 py-2 text-sm font-medium leading-4 text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
        Send to {email}
      </button>
    </section>
  );
}
