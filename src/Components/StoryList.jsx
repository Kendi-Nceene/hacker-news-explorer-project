import React, { useState, useEffect } from "react";
import StoryItem from "./StoryItem.jsx";
import SearchBar from "./SearchBar.jsx";

function StoryList({ type, onUserClick }) {
  const [stories, setStories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    async function fetchStories() {
      setLoading(true);
      const res = await fetch(`https://hacker-news.firebaseio.com/v0/${type}.json`);
      const ids = await res.json();
      const top10 = ids.slice(0, 10);
      const storyPromises = top10.map((id) =>
        fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`).then((r) => r.json())
      );
      const storyData = await Promise.all(storyPromises);
      setStories(storyData);
      setLoading(false);
    }
    fetchStories();
  }, [type]);

  const filteredStories = stories.filter(
    (story) =>
      story &&
      (story.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        story.by.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  if (loading) return <p className="loading">Loading {type}...</p>;

  return (
    <div className="story-list">
      <SearchBar onSearch={setSearchQuery} />
      {filteredStories.map((story) => (
        <StoryItem key={story.id} story={story} onUserClick={onUserClick} />
      ))}
    </div>
  );
}

export default StoryList;
