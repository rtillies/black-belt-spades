import React from 'react'

export default function Navbar() {
  return (
  <nav className="navbar navbar-expand-lg bg-body-tertiary sticky-top">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">
        <img src="src/assets/images/black-belt.png" alt="Logo" width="30" height="24" className="d-inline-block align-text-top" />{" "}
        Black Belt Spades
      </a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="index.html">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Lessons</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Variations</a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Organizations
            </a>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="https://www.theworldseriesofspades.com/" target="_blank">The World Series
                  of Spades</a>
              </li>
              <li>
                <a className="dropdown-item" href="https://www.thegameofspades.com/" target="_blank">The Game of Spades</a>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <a className="dropdown-item disabled" aria-disabled="true" href="#">More to come!</a>
              </li>
            </ul>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#"> Log In</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  )
}
