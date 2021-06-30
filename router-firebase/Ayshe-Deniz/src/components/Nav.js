import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
  <div className="navbar">
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
    <Link to="/contact-us">Contact Us</Link>
    <Link to="/users">Users</Link>
  </div>)
};

export default Nav