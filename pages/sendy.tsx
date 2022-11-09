import { useState } from "react";

export default function Form() {
  const [isSent, setIsSent] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("Hi!");

  if (isSent) {
    return <h1>Your message is on its way</h1>;
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setIsSent(true);
        sendMessage(message);
      }}
    >
      <textarea
        placeholder="Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button type="submit">Send</button>
    </form>
  );
}

function sendMessage(message: string) {
  return;
}
