import React, { useEffect, useRef, useState } from 'react';
import { Send, X, Bot } from 'lucide-react';
import ReactMarkdown from 'react-markdown';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'https://portfolio-server-pmyl.onrender.com';

const ChatInterface = ({ isOpen, toggleChat }) => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, loading]);

  const basicQuestions = [
    { text: 'Tell me about your best project' },
    { text: 'What tech stack do you work with?' },
    { text: 'What kind of roles are you looking for?' },
    { text: 'What makes you different from other developers?' },
    { text: 'What backend work have you done?' },
    { text: 'How can I contact you?' }
  ];

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const sendMessage = async (messageText = input.trim()) => {
    const userText = messageText.trim();
    if (!userText) return;

    const history = messages.map(({ text, sender }) => ({ text, sender }));
    const userMessage = { text: userText, sender: 'user' };

    setMessages((prev) => [...prev, { text: userText, sender: 'user', timestamp: new Date() }]);
    setInput('');
    setLoading(true);

    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 90000);

      const response = await fetch(`${API_BASE_URL}/api/chat`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          message: userText,
          messages: [...history, userMessage]
        }),
        signal: controller.signal
      });

      clearTimeout(timeoutId);

      let data;
      try {
        data = await response.json();
      } catch {
        data = {};
      }

      if (response.ok && data?.success && data?.data) {
        setMessages((prev) => [
          ...prev,
          { text: data.data, sender: 'bot', timestamp: new Date() }
        ]);
      } else {
        const serverMessage = data?.message || 'I don’t have that information yet, but you can contact me directly.';
        setMessages((prev) => [
          ...prev,
          {
            text: serverMessage,
            sender: 'bot',
            timestamp: new Date()
          }
        ]);
      }
    } catch (error) {
      console.error(error);
      const fallbackMessage = error?.name === 'AbortError'
        ? 'The server is still waking up. Please try again in a moment.'
        : error?.message || 'The AI service is taking longer than expected. Please try again in a moment.';

      setMessages((prev) => [
        ...prev,
        { text: fallbackMessage, sender: 'bot', timestamp: new Date() }
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleSuggestionClick = (text) => {
    sendMessage(text);
  };

  return (
    <div
      className={`
        fixed bottom-6 right-6 z-[100]
        w-[92vw] sm:w-[390px]
        h-[560px] max-h-[85vh]
        ${isOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0 pointer-events-none'}
        transition-all duration-300 ease-out
      `}
    >
      <div className="relative flex h-full flex-col overflow-hidden rounded-[24px] border border-black/10 bg-white/95 shadow-[0_24px_80px_rgba(0,0,0,0.18)] backdrop-blur-xl dark:border-white/10 dark:bg-gray-900/95">
        <div className="flex items-center justify-between border-b border-gray-200 bg-gradient-to-r from-gray-900 to-gray-700 px-4 py-3 dark:border-gray-700">
          <div className="flex items-center gap-3">
            <div className="relative">
              <Bot className="h-7 w-7 text-white" />
              <span className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full bg-emerald-500 ring-2 ring-gray-900"></span>
            </div>
            <div>
              <h3 className="text-sm font-semibold tracking-wide text-white">Tanmay’s AI</h3>
              <p className="text-xs text-gray-300">Ask me anything about my work</p>
            </div>
          </div>
          <button
            onClick={toggleChat}
            className="rounded-full p-1.5 text-white transition hover:bg-white/10"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="flex-1 space-y-3 overflow-y-auto px-4 py-3">
          {messages.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center text-center text-gray-500 dark:text-gray-400">
              <p className="text-sm font-medium text-gray-700 dark:text-gray-200">👋 Hi, I’m Tanmay’s personal AI</p>
              <p className="mt-1 text-xs">Try one of these prompts to get started.</p>
            </div>
          ) : (
            messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div
                  className={`max-w-[85%] break-words rounded-2xl px-3 py-2 text-sm leading-relaxed shadow-sm ${
                    msg.sender === 'user'
                      ? 'rounded-br-md bg-gray-900 text-white dark:bg-gray-700'
                      : 'rounded-bl-md bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-100'
                  }`}
                >
                  <ReactMarkdown
                    components={{
                      p: ({ ...props }) => <p className="mb-2 last:mb-0 leading-relaxed" {...props} />,
                      a: ({ ...props }) => <a className="font-medium text-blue-600 underline decoration-2 underline-offset-2 dark:text-blue-400" {...props} />,
                      ul: ({ ...props }) => <ul className="my-2 list-disc space-y-1 pl-5" {...props} />,
                      ol: ({ ...props }) => <ol className="my-2 list-decimal space-y-1 pl-5" {...props} />,
                      li: ({ ...props }) => <li className="leading-relaxed" {...props} />
                    }}
                  >
                    {msg.text}
                  </ReactMarkdown>
                </div>
              </div>
            ))
          )}

          {loading && (
            <div className="flex justify-start">
              <div className="flex gap-1 rounded-2xl rounded-bl-md bg-gray-100 px-3 py-2 text-sm text-gray-800 dark:bg-gray-800 dark:text-gray-100">
                <span className="animate-bounce">.</span>
                <span className="animate-bounce delay-150">.</span>
                <span className="animate-bounce delay-300">.</span>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        <div className="border-t border-gray-200 bg-white/80 px-3 py-3 dark:border-gray-700 dark:bg-gray-900/80">
          <div className="mb-2 flex gap-2 overflow-x-auto pb-1">
            {basicQuestions.map((q, i) => (
              <button
                key={i}
                onClick={() => handleSuggestionClick(q.text)}
                className="whitespace-nowrap rounded-full bg-gray-100 px-3 py-1.5 text-xs font-medium text-gray-700 transition hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700"
              >
                {q.text}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2 rounded-full border border-gray-200 bg-gray-100 px-3 py-1.5 dark:border-gray-700 dark:bg-gray-800">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              disabled={loading}
              placeholder="Ask about projects, skills, experience…"
              className="flex-1 bg-transparent px-1 text-sm text-gray-900 outline-none placeholder:text-gray-500 disabled:cursor-not-allowed dark:text-white dark:placeholder:text-gray-400"
            />
            <button
              onClick={() => sendMessage()}
              disabled={loading}
              className={`rounded-full p-2 transition ${
                loading
                  ? 'cursor-not-allowed bg-gray-400 text-white'
                  : 'bg-gray-900 text-white hover:bg-gray-700 dark:bg-gray-700 dark:hover:bg-gray-600'
              }`}
            >
              <Send className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatInterface;