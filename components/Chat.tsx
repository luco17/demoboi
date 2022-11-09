import React, { useState } from "react";
import { Contact } from "../pages/preservo";

interface Props {
  key: string;
  contact: Contact;
}

export default function Chat(props: Props) {
  const { contact } = props;
  const { name, email } = contact;
  const [text, setText] = useState("");

  return (
    <section className="border border-gray-500 rounded p-4 max-w-lg">
      <textarea
        value={text}
        placeholder={"Chat to " + name}
        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
          setText(e.target.value)
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
