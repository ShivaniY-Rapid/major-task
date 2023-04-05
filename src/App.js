import "./App.css";
import Login from "./Component.js/Login";
import Role from "./Component.js/Role";
import Internal_User from "./Component.js/Internal_User";
import AddInternaluser from "./Component.js/AddInternalUser";
import { NavLink, Route, Routes } from "react-router-dom";
import { HomeCompo } from "./Component.js/Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/" element={<HomeCompo />}></Route>
        <Route path="addinternaluser" element={<AddInternaluser />}></Route>
        <Route path="internaluser" element={<Internal_User />}></Route>
        <Route path="/role" element={<Role />}></Route>
      </Routes>
    </>
  );
}

export default App;
