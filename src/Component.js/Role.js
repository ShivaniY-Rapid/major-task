import React, { useState } from "react";
import  Button  from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Chip  from "@mui/material/Chip";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material";

const Role = () => {
  const [name, setName] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setName([
        ...name,
        {
            name: "",
            admin: "",

        }
    ])
  };

  function handleName(e){
    setName(e.target.value);
  }
  return (
    <div>
      <h1>Create Role</h1>
      <p>Roles are the core way of controlling access to your cluster.</p>
      <form onSubmit={handleSubmit}>
        <div>
          <h2>Name</h2>
          <label htmlFor="name">
            <b>Name</b> <br /> <br />
          </label>
          <br></br>
          <p> Specify a descriptive and unique role name.</p>
          <input
          style={{width:'300px',marginTop:'15px'}}
            id="name"
            type="text"
            value={name}
            onChange={handleName}
          />
          <p>
            The role name must contain from 2-50 characters. Valid characters
            are A-Z,a-z,0-9,_,-, and unicode characters.
          </p> <br />
        </div>

        <div>
          <h2>Role Permissions</h2>
          <h5>Administrator</h5>
          <input type="checkbox" id="admin" name="admin" value="admin" onClick={()=>setName()}></input>
          <label htmlFor="admin">Yes</label>
          <br></br>
        </div> <br />

        <div>
          <h5>Tresata Product Access</h5>
          <input type="checkbox" id="tides" name="tides" value="tides" ></input>
          <label htmlFor="tides" style={{marginRight: '20px'}}>TIDES</label>

          <input type="checkbox" id="trek" name="trek" value="trek"></input>
          <label htmlFor="trek" style={{marginRight: '20px'}}>TREK</label>

          <input type="checkbox" id="orion" name="orion" value="orion"></input>
          <label htmlFor="orion">ORION</label>
        </div> <br />

        <div>
            <h5> Tresata Application Access</h5>

        </div> <br />
       

        <div>
            <h5> Tresata Application Tabs Access</h5>
        </div>

        <div>
          <label htmlFor="description">Description:</label><br></br>
        </div> <br />

        <div>
            <h5> Tresata TREK</h5>
            <label htmlFor="add" style={{marginRight:'20px'}}>Add :</label>
             <Button variant="outlined" style={{height:'30px'}} type="submit">Add</Button>
             <br />   <br />


            <label htmlFor="update" style={{marginRight: '20px'}}>Update :</label>
            <Button variant="outlined" style={{height: '30px'}} type="submit">Update</Button>
            <br />  <br />

            <label htmlFor="delete" style={{marginRight: '20px'}}>Delete :</label>
            <Button variant="outlined" style={{height: '30px'}} type="submit">Delete</Button>
            <br />  <br />

            <label htmlFor="al" style={{margiRight: '20px'}}>All : </label>
            <Button variant="outlined" style={{height: '30px'}} type="submit">All</Button>
            <br /> <br />
        </div>



        <Stack direction="row" spacing={2}>
      <Button variant="outlined" type="submit">Create Role</Button>
        {/* <button type="submit">Create Role</button> */}
        </Stack>
      </form>
    </div>
  );
};

export default Role;
