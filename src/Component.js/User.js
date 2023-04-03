import React from "react";
import Stack  from "@mui/system/Stack";
import  Button  from "@mui/material/Button";

const User = () => {
  return (
    <div>
        <form>
      <div>
        <h2>Create Internal User</h2>
        <p>
          The security plugin includes an internal user database. Use this
          database in place of in addition to an external authentication system.
        </p>
        
        <div>
          <h3> Credentials</h3>
          <label htmlFor="add">Username</label>
          <p>
          <small>  Specify a descriptive and unique username. You cannot edit the name
            once the users is created. </small>
          </p>
          <input type="text" id="name" placeholder="Name here"></input>
          <br /> <br></br>

          <label htmlFor="password">Password</label> <br />
          <input type="password" id="password"></input>
          <br /> <br />

          <label htmlFor="password">Re-enter Password</label> <br />
          <input type="password" id="password"></input> <br /> <br />

          <label htmlFor="status">Status</label> <br />
          <input type="radio" id="on" name="active" value="active"></input>
          <label htmlFor="on" >Active </label>
          <input type="radio" id="on" name="inactive" value="inactive"></input>
          <label htmlFor="on" >Inactive </label> <br/>
        <small> Specify user status</small>
        <br /> <br />


        <Stack direction="row" spacing={2}>
      <Button variant="outlined" type="submit">Create User</Button>
        </Stack>
          
        </div>
      </div>
      </form>
    </div>
  );
};
export default User;
