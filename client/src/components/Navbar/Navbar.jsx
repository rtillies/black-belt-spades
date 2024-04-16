import React from "react";
import { Link } from "react-router-dom";
import NavbarBrand from "./NavbarBrand";
import NavbarList from "./NavbarList";
import "./Navbar.css";
import NavbarCollapse from "./NavbarCollapse";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary sticky-top">
      <div className="container-fluid">
        <NavbarBrand />
        <NavbarCollapse />
        <NavbarList />
      </div>
    </nav>
  );
}
