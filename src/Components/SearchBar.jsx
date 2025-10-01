import React, { useState, useEffect } from "react";

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");

  // Debounce input
  useEffect(() => {
    const timeout = setTimeout(() => {
      onSearch(query);
    }, 300); // 300ms debounce
    return () => clearTimeout(timeout);
  }, [query, onSearch]);

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search by title or author..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;

