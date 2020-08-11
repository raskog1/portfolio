import React from "react";
import "./style.css";

function Navbar() {
  return (
    <header className="bg-dark">
      <h1 className="text-info">Ryan Skog</h1>

      <nav className="navbar navbar-expand-md bg-dark navbar-dark">
        {/* LinkedIn Icon */}
        <a
          className="header-icons"
          href="https://www.linkedin.com/in/ryan-skog-b4b6411aa/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img
            src="assets/Icons/LI-In-Bug.png"
            height="30px"
            alt="LinkedIn icon"
          />
        </a>

        {/* Github Icon */}
        <a
          className="header-icons"
          href="https://github.com/raskog1"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img
            src="assets/Icons/GitHub-Mark-120px-plus.png"
            height="30px"
            alt="Github icon"
          />
        </a>

        {/* Toggler/collapsibe Button */}
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#collapsibleNavbar"
          aria-controls="#collapsibleNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        {/* Navbar links */}
        <div className="collapse navbar-collapse" id="collapsibleNavbar">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="resume.html">
                Resume
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="portfolio.html">
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="contact.html">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
