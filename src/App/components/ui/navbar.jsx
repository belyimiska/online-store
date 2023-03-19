import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="nav">
      <div className="container">
        <ul className="nav-list">
          <li>
            <Link to="/">Main</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/shoes">Catalog</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
