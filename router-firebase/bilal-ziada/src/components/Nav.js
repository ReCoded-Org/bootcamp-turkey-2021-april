import React from "react";
import {Link} from "react-router-dom";

export const Nav = () => {
  return <div>
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
    <Link to="/contact-us">Contact Us</Link>
    <Link to="/users">Users</Link>
  </div>;
};

