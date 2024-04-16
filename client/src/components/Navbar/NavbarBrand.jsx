import React from "react";
import { Link } from "react-router-dom";

export default function NavbarBrand() {
  return (
    <>
      <img
        id="black-belt"
        src="images/black-belt.png"
        alt="Logo"
        width="30"
        height="24"
        className="d-inline-block align-text-top"
      />
      <Link className="navbar-brand" href="/">
        Black Belt Spades
      </Link>
    </>
  );
}
