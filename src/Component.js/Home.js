import React from "react";
import { NavLink, Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

export const HomeCompo = () => {
  console.log("Inside home");
  return (
    <div>
      <>
        <nav
          style={{
            display: "flex",
            flexDirection: "column",
            margin: "10px",
            padding: "20px",
            fontSize: "30px",
            border: "2px solid",
            height: "850px",
            width: "300px",
          }}
        >
          <Link to="addinternaluser" style={{ marginBottom: "10px" }}>
            {" "}
            Create User
          </Link>
          <Link to="internaluser"> Display User</Link>
        </nav>
        <Outlet />
      </>
    </div>
  );
};
