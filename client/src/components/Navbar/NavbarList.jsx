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
            <Link className="nav-link" to="/about">
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/variations">
              Variations
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
              Tournament
            </a>
            <ul className="dropdown-menu">
              <li>
                <Link className="dropdown-item" to="/teams">
                  Teams
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/games">
                  Games
                </Link>
              </li>
              <li>
                <Link className="dropdown-item disabled" to="/admin">
                  Dashboard
                </Link>
              </li>
              {/* <li>
                <hr className="dropdown-divider" />
              </li> */}
            </ul>
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
                <a
                  className="dropdown-item"
                  href="https://www.blvckspades.com/"
                  target="_blank"
                >
                  Blvck Spades
                </a>
              </li>
              <li>
                <a
                  className="dropdown-item"
                  href="https://www.spades-brand.com/"
                  target="_blank"
                >
                  Spades Brand
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
            <Link className="nav-link disabled" to="/login">
              Log In
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
