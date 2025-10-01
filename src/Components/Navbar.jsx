import React from "react";

function Navbar({ onNavClick }) {
  const links = ["topstories", "newstories", "beststories", "askstories", "showstories", "jobstories"];

  return (
    <nav className="navbar">
      {links.map((link) => (
        <button key={link} onClick={() => onNavClick(link)} className="nav-btn">
          {link.replace("stories", "").toUpperCase()}
        </button>
      ))}
    </nav>
  );
}

export default Navbar;
