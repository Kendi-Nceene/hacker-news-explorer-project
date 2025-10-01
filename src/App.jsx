import React, { useState } from "react";
import Navbar from "./Components/Navbar.jsx";
import StoryList from "./Components/StoryList.jsx";
import UserProfile from "./Components/UserProfile.jsx";
import Footer from "./Components/Footer.jsx";
import CommentsList from "./Components/CommentsList.jsx";

function App() {
  const [view, setView] = useState("topstories");
  const [selectedUser, setSelectedUser] = useState(null);

  function handleNavClick(type) {
    setView(type);
    setSelectedUser(null); // reset when switching
  }

  return (
  <div className="app">
    <Navbar onNavClick={handleNavClick} />
    <h1>🚀 Hacker News Explorer</h1>

    {selectedUser ? (
      <UserProfile 
        username={selectedUser} 
        onBack={() => setSelectedUser(null)} 
      />
    ) : (
      <>
        <StoryList type={view} onUserClick={setSelectedUser} />
        <CommentsList/>
        <Footer />
      </>
    )}
  </div>
);

}

export default App;
