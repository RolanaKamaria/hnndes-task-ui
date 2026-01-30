"use client";

import { Home, Search, MessageCircle, User, Plus } from "lucide-react";

function BottomNavigation({ currentPage, onNavigate }) {
  const navItems = [
    { id: "home", icon: Home, label: "Home", page: "home" },
    { id: "search", icon: Search, label: "Search", page: "search" },
    { id: "add", icon: Plus, label: "Add new", isCenter: true },
    { id: "messages", icon: MessageCircle, label: "Messages", page: "chats" },
    { id: "profile", icon: User, label: "Profile", page: "profile" },
  ];

  const isActive = (page) => {
    if (
      page === "chats" &&
      (currentPage === "chats" || currentPage === "chat-detail")
    ) {
      return true;
    }
    return currentPage === page;
  };

  return (
    <nav
      className="fixed bottom-0 left-0 right-0 bg-white border-t border-black/30 pb-safe md:hidden"
      role="navigation"
      aria-label="Mobile navigation"
    >
      <ul className="flex items-center justify-around py-3">
        {navItems.map((item) => (
          <li key={item.id}>
            {item.isCenter ? (
              <button
                type="button"
                className="flex items-center justify-center w-[70px] h-12 rounded-full bg-gradient-to-bl from-pink-500 via-rose-500 to-orange-400 shadow-lg transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-xl focus:outline-none active:scale-95"
                aria-label={item.label}
              >
                <item.icon
                  size={20}
                  className="text-white"
                  aria-hidden="true"
                />
              </button>
            ) : (
              <button
                type="button"
                onClick={() => onNavigate(item.page)}
                className={`flex flex-col items-center justify-center p-2 transition-all duration-200 ease-in-out hover:opacity-70 focus:outline-none rounded-lg ${
                  isActive(item.page) ? "text-black" : "text-black/80"
                }`}
                aria-label={item.label}
                aria-current={isActive(item.page) ? "page" : undefined}
              >
                <item.icon
                  size={24}
                  strokeWidth={isActive(item.page) ? 2 : 1.5}
                  aria-hidden="true"
                />
              </button>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default BottomNavigation;
