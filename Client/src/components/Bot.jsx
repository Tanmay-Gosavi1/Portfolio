import React, { useState } from 'react'
import botImage from '../assets/bot.png';
import ChatInterface from './ChatInterface';

const Bot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleChat = () => {
        setIsOpen(!isOpen);
    } 

  return (
    <div className="fixed bottom-6 group right-6 z-105">
        {/* Chat Interface */}
        {isOpen && (
        <div
            className="fixed inset-0 bg-black/10 backdrop-blur-sm z-99"
            onClick={() => setIsOpen(false)}
        />
        )}

        <ChatInterface
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            toggleChat={toggleChat}
        />

        {/* Notification Badge */}
        {!isOpen && (
            <span className="absolute -top-1 -right-1 z-[1000] flex h-5 w-5 items-center justify-center rounded-full bg-pink-600 text-[11px] font-semibold text-white shadow-md">
            1
            </span>
        )}    

        {/* Glow Ring */}
        <span className="absolute inset-0 rounded-full bg-pink-500/30 blur-xl animate-pulse"></span>

        {/* Floating Button */}
        <button
            onClick={toggleChat}
            aria-label="Open AI Chat"
            className="
            relative flex items-center justify-center
            w-14 h-14 sm:w-16 sm:h-16 p-1.5
            rounded-full overflow-hidden
            bg-white
            shadow-xl shadow-black/40
            transition-all duration-300
            hover:scale-110
            hover:shadow-black/60
            focus:outline-none
            animate-float
            "
        >
            <img
                src={botImage}
                alt="AI Assistant"
                className="w-full h-full object-cover"
            />
            {/* 💬 Tooltip (LEFT side, on hover) */}
            <span className="
                absolute right-full mr-3 top-1/2 -translate-y-1/2
                whitespace-nowrap
                opacity-0 group-hover:opacity-100
                transition-all duration-200
                text-xs bg-black text-white px-2 py-1 rounded-md
                pointer-events-none
                ">
                Ask about my work
            </span>
        </button>
    </div>
  )
}

export default Bot