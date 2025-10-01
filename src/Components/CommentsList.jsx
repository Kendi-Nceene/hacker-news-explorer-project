import React, { useEffect, useState } from "react";

function CommentsList({ commentIds }) {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    async function fetchComments() {
      if (!commentIds || commentIds.length === 0) return;
      const commentPromises = commentIds.slice(0, 10).map((id) =>
        fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`).then((r) => r.json())
      );
      const data = await Promise.all(commentPromises);
      setComments(data);
    }
    fetchComments();
  }, [commentIds]);

  if (!commentIds || commentIds.length === 0) return <p>No comments yet.</p>;
  if (comments.length === 0) return <p>Loading comments...</p>;

  return (
    <div className="comments-list">
      {comments.map((c) => (
        <div key={c.id} className="comment">
          <p>
            <strong>{c.by}</strong> | {new Date(c.time * 1000).toLocaleString()}
          </p>
          <p dangerouslySetInnerHTML={{ __html: c.text }} />
          {c.kids && <CommentsList commentIds={c.kids} />}
        </div>
      ))}
    </div>
  );
}

export default CommentsList;
