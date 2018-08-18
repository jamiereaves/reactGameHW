import React from "react";
import "./Header.css";

const Header = props => 
  <nav className="navbar fixed-top d-flex justify-content-between">
    <span className="navbar-brand mb-0">A GAME OF BEANS</span><span className="scoreCard">{props.children}</span>
  </nav>
export default Header;
