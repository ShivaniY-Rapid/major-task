import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Stack from '@mui/material/Stack';
import { Button } from "@mui/material";
import TextField from "@mui/material";

const Login = () => {
  const [email, setEmail] = useState("");
  const [passw, setPassw] = useState("");
  const navigate = useNavigate();
  const submitThis = (e) => {
    e.preventDefault();
    if (email === "admin" && passw === "admin") {
       alert ('wc admin')
      navigate("/addinternaluser");
    } else {
      alert("Invalid login credentials");
    }
  };
  return (
    <>
      <div style={{}}>
        <form action="" onSubmit={submitThis}>
          <div>
            <label htmlFor="email">Email : </label>
            <input
              type="text"
              name="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              />

              <label htmlFor="passw">Password : </label>
              <input
                type="password"
                name="passw"
                id="passw"
                value={passw}
                onChange={(e) => setPassw(e.target.value)}
              />
            
          </div>
          <br />
         
          <Stack spacing={2} direction="row">
            <Button variant="outlined" type="submit">Login</Button>
          </Stack>
          {/* <button type="submit">Login</button> */}
        </form>
      </div>
    </>
  );
};

export default Login;
