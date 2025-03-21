import React, { useEffect, useState } from 'react'

function Admin() {
  const [messages, setMessages] = useState([]);
  const [reply, setReply] = useState('');

  useEffect(() => {
    const storedMessages = JSON.parse(localStorage.getItem('messages')) || [];
    setMessages(storedMessages);
  }, []);

  function handleReply() {
    if (reply.trim()) {
      const newMessage = {
        sender: 'Admin',
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
          <div key={index} className={msg.sender === "Admin" ? 'bg-gray-100 p-3 rounded-md' : 'bg-blue-100 p-3 rounded-md'}>
            <h2 className="font-semibold">{msg.sender}: {msg.content}</h2>
            <p className="text-sm text-gray-600">{msg.timestamp}</p>
          </div>
        ))}
        <textarea
          value={reply}
          onChange={(e) => setReply(e.target.value)}
          placeholder="Type your reply..."
          className="w-full p-2 border border-gray-300 rounded-md"
        />
        <button
          onClick={handleReply}
          className="w-full mt-3 p-3 bg-green-500 text-white rounded-md hover:bg-green-600"
        >
          Reply
        </button>

        
      </div>
    </div>
  )
}

export default Admin;
