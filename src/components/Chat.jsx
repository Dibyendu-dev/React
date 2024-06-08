import { useState, useEffect } from 'react';

export default function Chat({ contact, text, onTextChange }) {
  const [localText, setLocalText] = useState(text);

  useEffect(() => {
    setLocalText(text);
  }, [text]);

  const handleChange = (e) => {
    const newText = e.target.value;
    setLocalText(newText);
    onTextChange(contact.id, newText);
  };

  return (
    <section className="chat">
      <textarea
        value={localText}
        placeholder={'Chat to ' + contact.name}
        onChange={handleChange}
      />
      <br />
      <button>Send to {contact.email}</button>
    </section>
  );
}
