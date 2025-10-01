import React from "react";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <p>Made with ❤️ using ReactJS | HackerNews API</p>
      <p>© {year} HackerNews Explorer</p>
    </footer>
  );
}

export default Footer;
