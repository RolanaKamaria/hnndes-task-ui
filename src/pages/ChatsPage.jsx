"use client";

const chatsData = [
  {
    id: 1,
    name: "James",
    avatar:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=100&h=100&fit=crop",
    lastMessage: "Thank you! That was very helpful!",
    messages: [
      {
        id: 1,
        sender: "them",
        text: "Really love your most recent photo. I've been trying to capture the same thing for a few months and would love some tips!",
      },
      {
        id: 2,
        sender: "me",
        text: "A fast 50mm like f1.8 would help with the bokeh. I've been using primes as they tend to get a bit sharper images.",
      },
      {
        id: 3,
        sender: "them",
        text: "Thank you! That was very helpful!",
      },
    ],
  },
  {
    id: 2,
    name: "Will Kenny",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
    lastMessage: "I know... I'm trying to get the funds.",
    messages: [
      {
        id: 1,
        sender: "them",
        text: "I know... I'm trying to get the funds.",
      },
    ],
  },
  {
    id: 3,
    name: "Beth Williams",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
    lastMessage:
      "I'm looking for tips around capturing the milky way. I have a 6D with a 24-100mm...",
    messages: [
      {
        id: 1,
        sender: "them",
        text: "I'm looking for tips around capturing the milky way. I have a 6D with a 24-100mm...",
      },
    ],
  },
  {
    id: 4,
    name: "Rev Shawn",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
    lastMessage:
      "Wanted to ask if you're available for a portrait shoot next week.",
    messages: [
      {
        id: 1,
        sender: "them",
        text: "Wanted to ask if you're available for a portrait shoot next week.",
      },
    ],
  },
];

function ChatsPage({ onSelectChat }) {
  return (
    <div className="max-w-7xl mx-auto">
      {/* Page Header */}
      <header className="sticky top-0 md:top-16 bg-white z-10 px-5 py-4 border-b border-black/30 md:border-none">
        <h1 className="text-[17px] md:text-3xl font-semibold text-black text-center md:text-left l md:pt-6">
          Chats
        </h1>
      </header>

      {/* Chat List */}
      <ul role="list" aria-label="Chat conversations">
        {chatsData.map((chat) => (
          <li key={chat.id}>
            <button
              type="button"
              onClick={() => onSelectChat(chat)}
              className="w-full flex items-center gap-4 px-5 py-4 hover:bg-gray-50 transition-colors duration-200 focus:outline-none border-b border-black/30 "
              aria-label={`Open chat with ${chat.name}`}
            >
              {/* Avatar */}
              <img
                src={chat.avatar || "/placeholder.svg"}
                alt={`${chat.name}'s avatar`}
                className="w-16 h-16 rounded-full object-cover flex-shrink-0"
              />

              {/* Chat Info */}
              <div className="flex-1 min-w-0 text-left">
                <h2 className="text-[13px] leading-[18px] md:text-base lg:text-lg font-bold text-black truncate">
                  {chat.name}
                </h2>
                <p className="text-[13px] text-black mt-0.5 lg:text-sm">
                  {chat.lastMessage}
                </p>
              </div>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ChatsPage;
