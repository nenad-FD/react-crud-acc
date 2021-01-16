import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar bg-light">
      <Link to="/" className="navbar-brand">
        Accounts App
      </Link>

      <ul className="navbar-nav ml-auto ">
        <NavLink
          to="/"
          exact
          className="nav-link"
          activeClassName={"activeLink"}
        >
          Accounts
        </NavLink>
        <NavLink
          to="/addAccounts"
          className="nav-link"
          activeClassName={"activeLink"}
        >
          Add Accounts
        </NavLink>
      </ul>
    </nav>
  );
};

export default Header;
