import React from "react";
import { Link } from "react-router-dom";
import { HiArchiveBox } from "react-icons/hi2";

function Header() {
  return (
    <header>
      <h1>
        <Link className="judul" to="/" title="Home">
          Notes Apps - Julhan
        </Link>{" "}
      </h1>

      <nav className="navigation">
        <Link to="/archives" title="Archives">
          <HiArchiveBox />
        </Link>
      </nav>
    </header>
  );
}

export default Header;
