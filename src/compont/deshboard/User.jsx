import React, { useEffect, useState } from 'react';

function User() {
  const [messages, setMessages] = useState([]);
  const [reply, setReply] = useState('');

  // Load messages from localStorage initially and every second
  useEffect(() => {
    const loadMessages = () => {
      const storedMessages = JSON.parse(localStorage.getItem('messages')) || [];
      setMessages(storedMessages);
    };

    loadMessages();

    const interval = setInterval(() => {
      loadMessages();
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  function handleReply() {
    if (reply.trim()) {
      const newMessage = {
        sender: 'User',
        content: reply,
        timestamp: new Date().toLocaleTimeString(),
      };

      const updatedMessages = [...messages, newMessage];
      localStorage.setItem('messages', JSON.stringify(updatedMessages));
      setMessages(updatedMessages);
      setReply('');
    }
  }

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white rounded-xl shadow-md">
      <div className="messages space-y-4">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={
              msg.sender === 'Admin'
                ? 'bg-gray-100 p-3 rounded-md'
                : 'bg-blue-100 p-3 rounded-md'
            }
          >
            <h2 className="font-semibold">
              {msg.sender}: {msg.content}
            </h2>
            <p className="text-sm text-gray-600">{msg.timestamp}</p>
          </div>
        ))}
        <textarea
          value={reply}
          onChange={(e) => setReply(e.target.value)}
          placeholder="Type your message"
          className="w-full p-2 border border-gray-300 rounded-md"
        />
        <button
          className="w-full mt-3 p-3 bg-green-500 text-white rounded-md hover:bg-green-600"
          onClick={handleReply}
        >
          Send Message
        </button>
      </div>
    </div>
  );
}

export default User;
