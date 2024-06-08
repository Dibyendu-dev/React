import { useState } from 'react';
import Chat from './Chat.jsx';
import ContactList from './ContactList.jsx';

export default function Messenger() {
  const [to, setTo] = useState(contacts[0]);
  const [messages, setMessages] = useState({});

  const handleTextChange = (contactId, text) => {
    setMessages(prevMessages => ({
      ...prevMessages,
      [contactId]: text
    }));
  };

  return (
    <div>
      <ContactList
        contacts={contacts}
        selectedContact={to}
        onSelect={contact => setTo(contact)}
      />
      <Chat
        key={to.id}
        contact={to}
        text={messages[to.id] || ''}
        onTextChange={handleTextChange}
      />
    </div>
  );
}

const contacts = [
  { id: 0, name: 'Taylor', email: 'taylor@mail.com' },
  { id: 1, name: 'Alice', email: 'alice@mail.com' },
  { id: 2, name: 'Bob', email: 'bob@mail.com' }
];
