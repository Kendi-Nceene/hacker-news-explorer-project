import React, { useState } from "react";
import StoryDetail from "./StoryDetail.jsx";

function StoryItem({ story, onUserClick }) {
  const [showDetail, setShowDetail] = useState(false);

  if (!story) return null;

  return (
    <div className="story-item">
      <h3>{story.title}</h3>
      <p>
        By <button className="user-link" onClick={() => onUserClick(story.by)}>{story.by}</button> | 
        Score: {story.score} | Comments: {story.descendants || 0}
      </p>
      <button onClick={() => setShowDetail(!showDetail)} className="detail-btn">
        {showDetail ? "Hide Details" : "View Details"}
      </button>
      {showDetail && <StoryDetail story={story} />}
    </div>
  );
}

export default StoryItem;
