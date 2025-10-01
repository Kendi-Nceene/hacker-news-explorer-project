import React, { useEffect, useState } from "react";

function UserProfile({ username, onBack }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function fetchUser() {
      const res = await fetch(`https://hacker-news.firebaseio.com/v0/user/${username}.json`);
      const data = await res.json();
      setUser(data);
    }
    fetchUser();
  }, [username]);

  if (!user) return <p>Loading user...</p>;

  return (
    <div className="user-profile">
      <button onClick={onBack} className="back-btn">⬅ Back</button>
      <h2>User: {user.id}</h2>
      <p>Karma: {user.karma}</p>
      {user.about && <p dangerouslySetInnerHTML={{ __html: user.about }} />}
    </div>
  );
}

export default UserProfile;
