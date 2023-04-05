import React, { useState } from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import MultiSelect from "react-multiple-select-dropdown-lite";
import "react-multiple-select-dropdown-lite/dist/index.css";

const Role = () => {
  const [name, setName] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    // setName([
    //   ...name,
    //   {
    //     name: "",
    //     admin: "",
    //   },
    // ]);
    setName(name);
    const id=Date.now();
    const obj={name:name,value:value,value1:value1};
    localStorage.setItem(id,JSON.stringify(obj));
  };
  console.log(name);
  const [value, setvalue] = useState("");
  const [value1, setvalue1] = useState("");
  const [clicked, setClicked] = useState(false);

  const handleOnchange = (val) => {
    setvalue(val);
  };
  const handleOnchange1 = (val1) => {
    setvalue1(val1);
  };

  const options = [
    { label: "Sales", value: "sales" },
    { label: "Business", value: "business" },
    { label: "Ops", value: "ops" },
    { label: "Development", value: "development" },
  ];
  const options1 = [
    { label: "Marketing", value: "Marketing" },
    { label: "Enterprise sales", value: "Enterprise sales" },
    { label: "Saasales", value: "Saas" },
    { label: "Direct Sales", value: "Direct sales" },
    { label: "B2B", value: "B2B" },
    { label: "B2C", value: "B2C" },
    { label: "Health screening", value: "health screening" },
    { label: "Dispensing", value: "Dispensing" },
    { label: "Core development", value: "core development" },
    { label: "Debugging", value: "debugging" },
  ];

  function handleName(e) {
    setName(e.target.value);
  }

  function addPriv() {
    setClicked(true);
  }

  return (
    <div style={{ marginLeft: "20px" }}>
      <div>
        <h1>Create Role</h1>
        <p>Roles are the core way of controlling access to your cluster.</p>
      </div>

      <form onSubmit={handleSubmit}>
        <div>
          <div>
            <label htmlFor="name">
              <b>Name</b>
              <input
                style={{
                  width: "300px",
                  marginLeft: "30px",
                }}
                id="name"
                type="text"
                // value={name}
                onChange={handleName}
              />
            </label>
          </div>
          <div> Specify a descriptive and unique role name.</div>
          <p>
            The role name must contain from 2-50 characters. Valid characters
            are A-Z,a-z,0-9,_,-, and unicode characters.
          </p>{" "}
          <br />
        </div>
        <div>
          <h2>Role Permissions</h2>
          <h5>Administrator</h5>
          <input
            type="checkbox"
            id="admin"
            name="admin"
            value="admin"
            onClick={() => setName()}
          ></input>
          <label htmlFor="admin">Yes</label>
          <br></br>
        </div>{" "}
        <br />
        <div>
          <h5>Tresata Product Access</h5>
          <input type="checkbox" id="tides" name="tides" value="tides"></input>
          <label htmlFor="tides" style={{ marginRight: "20px" }}>
            TIDES
          </label>

          <input type="checkbox" id="trek" name="trek" value="trek"></input>
          <label htmlFor="trek" style={{ marginRight: "20px" }}>
            TREK
          </label>

          <input type="checkbox" id="orion" name="orion" value="orion"></input>
          <label htmlFor="orion">ORION</label>
        </div>{" "}
        <br />
        <div>
          <div style={{ display: "flex", padding: "10px" }}>
            <div style={{ marginRight: "30px" }}>
              <h5> Tresata Application Access</h5>
              <div className="preview-values">
                {/* <h4>Values</h4> */}
                {value}
              </div>

              <MultiSelect onChange={handleOnchange} options={options} />
            </div>
            <div>
              <h5> Tresata Application Tabs Access</h5>
              <div className="preview-values">
                {/* <h4>Values</h4> */}
                {value1}
              </div>
              <MultiSelect onChange={handleOnchange1} options={options1} />
            </div>
          </div>

          <div
            style={{
              position: "relative",
              marginBottom: "5px",
              marginTop: "10px",
            }}
          >
            {clicked && (
              <div style={{ display: "flex", marginTop: "20px" }}>
                <MultiSelect onChange={handleOnchange} options={options} />
                <MultiSelect onChange={handleOnchange1} options={options1} />
              </div>
            )}
            <button style={{ margin: "20px" }} id="create" onClick={addPriv}>
              Add application priviledges
            </button>
          </div>
        </div>
        <div style={{ marginTop: "100px" }}>
          <h5> Tresata TREK</h5>
          <label htmlFor="add" style={{ marginRight: "20px" }}>
            Add :
          </label>
          <Button variant="outlined" style={{ height: "30px" }} type="submit">
            Add
          </Button>
          <br /> <br />
          <label htmlFor="update" style={{ marginRight: "20px" }}>
            Update :
          </label>
          <Button variant="outlined" style={{ height: "30px" }} type="submit">
            Update
          </Button>
          <br /> <br />
          <label htmlFor="delete" style={{ marginRight: "20px" }}>
            Delete :
          </label>
          <Button variant="outlined" style={{ height: "30px" }} type="submit">
            Delete
          </Button>
          <br /> <br />
          <label htmlFor="al" style={{ margiRight: "20px" }}>
            All :{" "}
          </label>
          <Button variant="outlined" style={{ height: "30px" }} type="submit">
            All
          </Button>
          <br /> <br />
        </div>
        <Stack direction="row" spacing={2}>
          <Button variant="outlined" type="submit">
            Create Role
          </Button>
        </Stack>
      </form>
    </div>
  );
};

export default Role;
