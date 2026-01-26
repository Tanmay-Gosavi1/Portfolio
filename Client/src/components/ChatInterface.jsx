import React from 'react'
import { useState } from 'react';
import { useEffect, useRef } from "react";
import { Send  , X , Bot} from 'lucide-react';
import ReactMarkDown from 'react-markdown'

const ChatInterface = ({isOpen, setIsOpen, toggleChat}) => {
    const [input, setInput] =useState('');
    const [messages, setMessages] = useState([]);
    const [loading , setLoading] = useState(false);
    const messagesEndRef = useRef(null);

    useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages, loading]);


     const basicQuestions = [
  { text: "Tell me about your best project" },
  { text: "What tech stack do you work with?" },
  { text: "What kind of roles are you looking for?" },
  { text: "What makes you different from other developers?" },
  { text: "What backend work have you done?" },
  { text: "How can I contact you?" }
];
    const handleKeyDown = (e) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            sendMessage();
        }
    };


    const sendMessage = async () => {
  if (input.trim() === "") return;

  const userText = input;

  setMessages((prev) => [
    ...prev,
    { text: userText, sender: "user", timestamp: new Date() }
  ]);

  setInput("");
  setLoading(true);

  try {
    const response = await fetch("https://portfolio-backend-lvoz.onrender.com/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ message: userText })
    });

    const data = await response.json();

    if (data.success && data.data) {
      // console.log(data);
      setMessages((prev) => [
        ...prev,
        { text: data.data, sender: "bot", timestamp: new Date() }
      ]);
    } else {
      setMessages((prev) => [
        ...prev,
        { text: "I don’t have that information yet, but you can contact me directly.", sender: "bot" }
      ]);
    }
  } catch (error) {
    console.error(error);
    setMessages((prev) => [
      ...prev,
      { text: "Server error. Please try later.", sender: "bot" }
    ]);
  } finally {
    setLoading(false);
  }
};

  return (
<div
  className={`
    fixed bottom-23 right-6 z-100
    w-[90vw] sm:w-[380px]
    h-150
    ${isOpen ? "scale-100 opacity-100" : "scale-95 opacity-0 pointer-events-none"}
    transition-all duration-300 ease-out
  `}
> 
  <div className="relative flex flex-col h-full rounded-2xl border border-black/10 dark:border-white/10 bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl shadow-2xl">
    
    {/* Header */}
    <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200 dark:border-gray-700">
      <div className="flex items-center gap-3">
        <div className="relative">
          <Bot className="w-7 h-7 text-black dark:text-white" />
          <span className="absolute bottom-0 right-0 w-2 h-2 bg-green-500 rounded-full ring-2 ring-white dark:ring-gray-800"></span>
        </div>
        <div>
          <h3 className="text-sm font-semibold tracking-wide text-black dark:text-white">
            Tanmay’s AI
          </h3>
          <p className="text-xs text-gray-500 dark:text-gray-400">
            Ask me anything about my work
          </p>
        </div>
      </div>
      <button
        onClick={toggleChat}
        className="p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition"
      >
        <X className="w-5 h-5 text-black dark:text-white" />
      </button>
    </div>

    {/* Messages */}
    <div className="flex-1 px-4 py-3 overflow-y-auto space-y-3">
      {messages.length === 0 ? (
        <div className="flex flex-col items-center justify-center text-center text-gray-500 dark:text-gray-400 h-full">
          <p className="text-sm">👋 Hi, I’m Tanmay’s personal AI</p>
          <p className="text-xs mt-1">Try one of these:</p>

          <div className="mt-4 flex flex-wrap justify-center gap-2">
            {basicQuestions.map((q, i) => (
              <button
                key={i}
                onClick={() => setInput(q.text)}
                className="px-3 py-1.5 text-xs rounded-full bg-black dark:bg-gray-900 text-white hover:bg-gray-800 dark:hover:bg-gray-700 transition"
              >
                {q.text}
              </button>
            ))}
          </div>
        </div>
      ) : (
        messages.map((msg, i) => (
          <div
            key={i}
            className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`
                max-w-[75%] px-3 py-2 rounded-xl text-sm leading-relaxed
                ${msg.sender === "user"
                  ? "bg-black dark:bg-gray-900 text-white rounded-br-none"
                  : "bg-gray-100 dark:bg-gray-700 text-black dark:text-white rounded-bl-none"}
                animate-fade-in
              `}
            >
              <ReactMarkDown>{msg.text}</ReactMarkDown>
            </div>
          </div>
        ))
      )}
      {loading && (
        <div className="flex justify-start">
            <div className="bg-gray-100 dark:bg-gray-700 text-black dark:text-white px-3 py-2 rounded-xl rounded-bl-none text-sm flex gap-1">
            <span className="animate-bounce">.</span>
            <span className="animate-bounce delay-150">.</span>
            <span className="animate-bounce delay-300">.</span>
            </div>
        </div>
        )}
        <div ref={messagesEndRef} />
    </div>

    {/* Input */}
    <div className="px-3 py-2 border-t border-gray-200 dark:border-gray-700">
      <div className="flex items-center gap-2 bg-gray-200 dark:bg-gray-700 rounded-full px-3 py-1.5">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
          placeholder="Ask about projects, skills, experience…"
          className="flex-1 bg-transparent outline-none text-sm px-1 text-black dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
        />
        <button
          onClick={sendMessage}
          disabled={loading}
          className={`p-2 rounded-full transition ${
                loading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-black dark:bg-gray-900 text-white hover:bg-gray-800 dark:hover:bg-gray-700"
            }`}
        >
          <Send className="w-4 h-4" />
        </button>
      </div>
    </div>
  </div>
</div>

  )
}

export default ChatInterface