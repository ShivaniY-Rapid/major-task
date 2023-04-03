import "./App.css";
// import { Routes, Route } from 'react-router-dom';
import Login from "./Component.js/Login";
import Role from "./Component.js/Role";
import Internal_User from "./Component.js/Internal_User";
import User from "./Component.js/User";
import AddInternaluser from "./Component.js/AddInternalUser";
import { NavLink, Outlet, Route, Routes } from "react-router-dom";
import { HomeCompo } from "./Component.js/Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="home" element={<HomeCompo />}></Route>
        <Route path="addinternaluser" element={<AddInternaluser />}></Route>
        <Route path="internaluser" element={<Internal_User />}></Route>
        <Route path="/internaluser/role" element={<Role />}></Route>
      </Routes>
     
    </>
  );
}

export default App;
