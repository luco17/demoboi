import { useState } from "react";
import Chat from "../components/Chat";
import ContactList from "../components/ContactList";

export interface Contact {
  name: string;
  email: string;
}

const contacts: Contact[] = [
  { name: "Taylor", email: "taylor@mail.com" },
  { name: "Alice", email: "alice@mail.com" },
  { name: "Bob", email: "bob@mail.com" },
];

export default function Messenger() {
  const [to, setTo] = useState<Contact>(contacts[0]);

  console.log(to);

  return (
    <div className="p-12 flex space-x-2">
      <ContactList
        contacts={contacts}
        onSelect={(contact) => setTo(contact)}
        selectedContact={to}
      />
      <Chat key={to.email} contact={to} />
    </div>
  );
}
