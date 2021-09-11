import React from "react";
import { NavLink } from "react-router-dom";

// styles
import '../styles/Navbar.css'

const Navbar = () => {
  return (
    <nav>
      <NavLink to="/" activeClassName="nav-selected" exact>
        HOME
      </NavLink>
      <NavLink to="/search" activeClassName="nav-selected" exact>
        SEARCH
      </NavLink>
    </nav>
  );
};

export default Navbar;
