"use client";

import { ChevronLeft } from "lucide-react";

const myAvatar =
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop";

function ChatDetailPage({ chat, onBack }) {
  if (!chat) return null;

  return (
    <div className="roboto-normal">
      {/* Chat Header */}
      <header className="sticky top-0 md:top-16 bg-white z-10 flex items-center px-2 md:px-5 py-3 border-b border-black/30 ">
        <button
          type="button"
          onClick={onBack}
          className="p-2 -ml-2 hover:bg-gray-100 rounded-full transition-colors duration-200 focus:outline-none"
          aria-label="Go back to chats"
        >
          <ChevronLeft size={28} className="text-black" aria-hidden="true" />
        </button>
        <h1 className="flex-1 text-lg font-semibold roboto-semibold text-black text-center md:text-start pr-10 md:pr-0 pl-0 md:pl-5">
          {chat.name}
        </h1>
      </header>

      {/* Messages */}
      <div className="px-4 md:px-6 py-6 space-y-6 max-w-7xl mx-auto">
        {chat.messages.map((message) => (
          <div
            key={message.id}
            className={`flex items-start gap-3 ${
              message.sender === "me" ? "flex-row-reverse" : ""
            }`}
          >
            {/* Avatar */}
            <img
              src={message.sender === "me" ? myAvatar : chat.avatar}
              alt={
                message.sender === "me"
                  ? "Your avatar"
                  : `${chat.name}'s avatar`
              }
              className="w-8 h-8 md:w-10 md:h-10 rounded-full object-cover flex-shrink-0"
            />

            {/* Message Bubble */}
            <div
              className={`max-w-xs md:max-w-md lg:max-w-xl px-4 py-3 rounded-md ${
                message.sender === "me"
                  ? "bg-black/3 rounded-tr-none"
                  : "bg-black/3 rounded-tl-none"
              }`}
            >
              <p className="text-sm md:text-base text-black leading-relaxed">
                {message.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ChatDetailPage;
