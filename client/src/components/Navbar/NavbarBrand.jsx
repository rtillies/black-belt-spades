import React from "react";
import { Link } from "react-router-dom";

export default function NavbarBrand() {
  return (
    <>
    <Link className="navbar-brand" to="/">
      <img
        id="black-belt"
        src="images/black-belt.png"
        alt="Logo"
        className="d-inline-block align-text-top"
      />
        Black Belt Spades
      </Link>
    </>
  );
}
