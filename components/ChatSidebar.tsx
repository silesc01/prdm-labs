'use client';
import { useChat } from 'ai/react';

export default function ChatSidebar() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();

  return (
    <aside className="w-[300px] bg-gray-900 p-4 overflow-y-auto">
      <div className="text-green-400 font-bold mb-2">Chat Assistant</div>
      <div className="space-y-2 mb-4">
        {messages.map((m, i) => (
          <div key={i} className={m.role === 'user' ? 'text-pink-400' : 'text-cyan-400'}>
            <strong>{m.role}:</strong> {m.content}
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit}>
        <input
          className="w-full p-2 bg-gray-800 text-white"
          value={input}
          onChange={handleInputChange}
          placeholder="Ask something..."
        />
      </form>
    </aside>
  );
}