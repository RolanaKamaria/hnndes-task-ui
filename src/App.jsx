"use client";

import { useState } from "react";
import SearchPage from "./pages/SearchPage";
import ChatsPage from "./pages/ChatsPage";
import ChatDetailPage from "./pages/ChatDetailPage";
import Layout from "./components/Layout";

function App() {
  const [currentPage, setCurrentPage] = useState("chats");
  const [selectedChat, setSelectedChat] = useState(null);

  const navigateTo = (page, data = null) => {
    setCurrentPage(page);
    if (data) {
      setSelectedChat(data);
    }
  };

  const renderPage = () => {
    switch (currentPage) {
      case "search":
        return <SearchPage />;
      case "chat-detail":
        return (
          <ChatDetailPage
            chat={selectedChat}
            onBack={() => navigateTo("chats")}
          />
        );
      case "chats":
      default:
        return (
          <ChatsPage onSelectChat={(chat) => navigateTo("chat-detail", chat)} />
        );
    }
  };

  return (
    <Layout currentPage={currentPage} onNavigate={navigateTo}>
      {renderPage()}
    </Layout>
  );
}

export default App;
