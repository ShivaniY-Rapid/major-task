import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../user.css";

const AddInternalUser = () => {
  const userObject = {
    name: "",
    password: "",
    confirm_password: "",
    // roles: [],
  };

  const [input, setInput] = useState(userObject);
  const [user, setUser] = useState();
  const navigate = useNavigate();

  function changehandler(event) {
    const { name, value } = event.target;
    setInput({ ...input, [name]: value });
  }

  function createUser(event) {
    event.preventDefault();
    if (input.password === input.confirm_password) {
      // setUser([...user, input]);
      setInput({ name: "", password: "", confirm_password: "" });
    } else {
      alert("password not matched");
    }
  }

  function handleCreateClick() {
    if (input.password === input.confirm_password) {
      navigate("/internaluser", { state: input });
    }
  }

  return (
    <div>
      <h1
        style={{
          position: "absolute",
          top: "1.5%",
          left: "15%",
          fontWeight: "400",
        }}
      >
        Create Internal User
      </h1>
      <div id="userDiv">
        <form onSubmit={createUser}>
          <input
            id="name"
            onChange={changehandler}
            name="name"
            value={input.name}
            type="text"
            placeholder="name"
            required
          />
          <input
            id="pass"
            onChange={changehandler}
            name="password"
            value={input.password}
            type="password"
            placeholder="password"
            required
          />
          <input
            id="cpass"
            onChange={changehandler}
            name="confirm_password"
            value={input.confirm_password}
            type="password"
            placeholder="Confirm password"
            required
          />
          <input
            id="active"
            onChange={changehandler}
            type="radio"
            name="active"
            value="Active"
          />
          <h4 style={{ position: "absolute", top: "40%", left: "4.5%" }}>
            Active
          </h4>
          <input
            id="inactive"
            onChange={changehandler}
            type="radio"
            name="active"
            value="Inactive"
          />
          <h4 style={{ position: "absolute", top: "40%", left: "12%" }}>
            Inactive
          </h4>
          <button id="create" type="submit" onClick={handleCreateClick}>
            Create
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddInternalUser;
