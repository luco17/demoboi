import type { Contact } from "../pages/preservo";

interface Props {
  contacts: Contact[];
  onSelect: (arg0: Contact) => void;
  selectedContact: Contact;
}

export default function ContactList(props: Props) {
  const { contacts, onSelect } = props;

  return (
    <section>
      <ul>
        {contacts.map((contact) => (
          <li key={contact.email}>
            <button
              onClick={() => {
                onSelect(contact);
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
