"use client";

import { Home, Search, Plus, MessageCircle, User } from "lucide-react";

function TopNavbar({ currentPage, onNavigate }) {
  const navItems = [
    { id: "home", icon: Home, label: "Home", page: "home" },
    { id: "search", icon: Search, label: "Search", page: "search" },
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
      className="hidden md:block sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm"
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Main nav items + Create button */}
          <div className="flex items-center gap-4 lg:gap-6 ">
            {navItems.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => onNavigate(item.page)}
                className={`
                  group relative flex items-center px-2 gap-2.5 py-2.5 text-base font-medium roboto-med rounded-lg
                  transition-colors duration-200 ease-in-out
                  hover:bg-pink-50 hover:text-gray-900
                  focus:outline-none 
                  ${isActive(item.page) ? "text-pink-500 " : "text-gray-700"}
                `}
                aria-label={item.label}
                aria-current={isActive(item.page) ? "page" : undefined}
              >
                <item.icon
                  size={20}
                  strokeWidth={isActive(item.page) ? 2.5 : 1.8}
                  className="transition-transform group-hover:scale-110"
                  aria-hidden="true"
                />
                <span>{item.label}</span>
              </button>
            ))}

            {/* Create button */}
            <button
              type="button"
              onClick={() => onNavigate("create")}
              className={`
                ml-3 inline-flex items-center gap-2 px-4 py-2 rounded-full
                bg-gradient-to-r from-rose-500 to-pink-500
                text-white text-base font-semibold roboto-semibold
                shadow-sm hover:shadow-md hover:from-rose-600 hover:to-pink-600
                active:scale-[0.98]
                transition-all duration-200 ease-out
                focus:outline-none focus:ring-2 focus:ring-rose-400 focus:ring-offset-2
              `}
              aria-label="Create new post"
            >
              <Plus size={18} aria-hidden="true" />
              Create
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default TopNavbar;
