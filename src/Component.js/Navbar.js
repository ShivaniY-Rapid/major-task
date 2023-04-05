import React from "react";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <div>
      <nav>
        <NavLink to="/"> Login</NavLink>
        <NavLink to="/addinternaluser"> Create User</NavLink>
        <NavLink to="/internaluser"> Display Internal User</NavLink>
        <NavLink to="/role">Role Permissions</NavLink>
      </nav>
    </div>
  );
};
