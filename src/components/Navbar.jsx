import React from "react";
import { NavLink } from "react-router-dom";

// styles
import '../styles/Navbar.css'

const Navbar = () => {
  return (
    <nav>
      <NavLink to="/" activeClassName="nav-selected" exact>
        Home
      </NavLink>
      <NavLink to="/search" activeClassName="nav-selected" exact>
        Search
      </NavLink>
    </nav>
  );
};

export default Navbar;
