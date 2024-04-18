import React from "react";
import { Route, Router, Link } from "react-router-dom";

export default function NavbarList() {
  return (
    <>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/lessons">
              Lessons
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/variations">
              Variations
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/teams">
              Teams
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/games">
              All Games
            </Link>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Organizations
            </a>
            <ul className="dropdown-menu">
              <li>
                <a
                  className="dropdown-item"
                  href="https://www.theworldseriesofspades.com/"
                  target="_blank"
                >
                  The World Series of Spades
                </a>
              </li>
              <li>
                <a
                  className="dropdown-item"
                  href="https://www.thegameofspades.com/"
                  target="_blank"
                >
                  The Game of Spades
                </a>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <a
                  className="dropdown-item disabled"
                  aria-disabled="true"
                  href="#"
                >
                  More to come!
                </a>
              </li>
            </ul>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link"
              to="https://github.com/rtillies/black-belt-spades"
              target="_blank"
            >
              GitHub
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/login">
              Log In
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
