import React from "react";

export default function Header() {
  return (
    <div className="headerWrapper">
      <div className="container container-fluid navbar-container">
        <nav className="navbar sticky-top navbar-expand-lg navbar-dark  scrolling-navbar ">
          <a href="#landingpage" className="navbar-brand text-center">
            Chandra <br />
            <span>M.</span>
            <br /> Pandey
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse navbar_items"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                {" "}
                <a className="nav-link" href="#about">
                  ABOUT ME
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#overview">
                  OVERVIEW
                </a>
              </li>
              <li className="nav-item">
                {" "}
                <a className="nav-link" href="#contact_me">
                  CONTACT
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
}

