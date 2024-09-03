import "./App.css";
import React from "react";

function App() {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-logo">
          {/*  */}
          <img src="/path-to-logo.png" alt="Webflow Community Logo" />
        </div>

        <ul className="navbar-links">
          <li>
            <a href="#">Watch & Listen</a>
          </li>
          <li>
            <a href="#">Events</a>
          </li>
          <li>
            <a href="#">Essentials</a>
          </li>
          <li>
            <a href="#">More</a>
          </li>
        </ul>

        <div className="navbar-actions">
          <button className="btn-get-started">Login</button>
        </div>
      </nav>

      <div className="app-containerer">
        <header className="header">
          <div className="header-content">
            <h1>Connect and build together</h1>
            <p>
              {" "}
              Connect and build with 85,000+ community members around the world
              — whether you're new to Webflow or a seasoned designer, there's a
              place for you.
            </p>
          </div>

          <div className="header-image">
            <img src="earth.png" />
          </div>
        </header>
        <section className="livestreams-section"></section>
      </div>
    </>
  );
}

export default App;
