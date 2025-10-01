import React from "react";
import CommentsList from "./CommentsList.jsx";

function StoryDetail({ story }) {
  return (
    <div className="story-detail">
      <p>Type: {story.type}</p>
      <p>Posted: {new Date(story.time * 1000).toLocaleString()}</p>
      {story.url && (
        <p>
          <a href={story.url} target="_blank" rel="noreferrer">Read More</a>
        </p>
      )}
      {story.kids && story.kids.length > 0 && (
        <>
          <h4>Comments:</h4>
          <CommentsList commentIds={story.kids} />
        </>
      )}
    </div>
  );
}

export default StoryDetail;

