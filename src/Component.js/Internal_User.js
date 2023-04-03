import React, { useEffect, useRef, useState } from "react";

import { AgGridReact } from "ag-grid-react";

import "ag-grid-community/styles/ag-grid.css";

import "ag-grid-community/styles/ag-theme-alpine.css";

// import { data } from "./data";
import { useLocation, useNavigate } from "react-router-dom";

// import { EuiIcon } from "@elastic/eui";

const Internal_User = () => {
  const tableRef = useRef();
  const location = useLocation();
  const navigate = useNavigate();
  const [rowData, setRowData] = useState([]);
  const data = [location.state];
  console.log(data);
  useEffect(() => {
    setRowData(data);
  }, []);

  const columnDefs = [
    {
      headerName: "User Name",

      field: "name",

      sortable: true,

      unSortIcon: true,

      resizable: true,

      editable: true,
      checkboxSelection: true,
      headerCheckboxSelection: true,
    },

    {
      headerName: "Status",

      field: "active",

      sortable: true,

      resizable: true,

      unSortIcon: true,

      editable: true,
    },

    {
      lockVisible: true,

      cellRenderer: (params) => (
        <div>
          {/* <EuiIcon
            type="pencil"
            onClick={() => handleEditButton(params.node.id)}
          />
          <EuiIcon
            type="trash"
            onClick={() => handleDelete(params.data.id)}
            style={{ marginLeft: "40px" }}
          /> */}
        </div>
      ),
    },
  ];

  const handleEditButton = (index) => {
    tableRef.current.api.setFocusedCell(index, "name");

    tableRef.current.api.startEditingCell({
      id: index,

      colKey: "name",
    });
  };

  const handleAddClick = () => {
    const temp = {
      name: "",

      active: "",
    };

    setRowData([temp, ...data]);
  };

  const handleDelete = (id) => {
    const newRows = rowData.filter((elem) => {
      return id !== elem.id;
    });

    setRowData(newRows);
  };
  const handleCreateRoleClick = () => {
    navigate("role");
  };

  const onFilterTextBoxChange = (e) => {
    tableRef.current.api.setQuickFilter(e.target.value);
  };

  return (
    <>
      <div style={{ marginLeft: "400px" }}>
        <h2> Internal Users</h2>
        <h5> Internal Users</h5>
        <p>
          This security plugin includes user database. You can map an internal
          user to a role from Roles.
        </p>
      </div>
      <div
        className="ag-theme-alpine"
        style={{
          height: 400,

          width: 500,

          marginTop: "50px",

          marginLeft: "400px",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <label>
            Search:
            <input type="text" onChange={onFilterTextBoxChange}></input>
          </label>
          <button
            style={{
              backgroundColor: "#1502ed",

              height: "40px",

              width: "200px",

              borderRadius: "5px",

              color: "white",

              fontSize: "20px",

              fontWeight: "500",
            }}
            onClick={() => handleAddClick()}
          >
            Add User
          </button>
          <button
            style={{
              backgroundColor: "#1502ed",

              height: "40px",

              width: "200px",

              borderRadius: "5px",

              color: "white",

              fontSize: "20px",

              fontWeight: "500",
              marginTop: "50px",
            }}
            onClick={() => handleCreateRoleClick()}
          >
            Create Role
          </button>
        </div>
        <div style={{ marginTop: "20px" }}></div>
        <div
          style={{
            height: 400,

            width: 800,

            marginTop: "20px",
          }}
        >
          <AgGridReact
            ref={tableRef}
            pagination={true}
            paginationPageSize={6}
            rowData={rowData}
            columnDefs={columnDefs}
            editType={"fullRow"}
            excludeHiddenColumnsFromQuickFilter="true"
          />
        </div>
      </div>
    </>
  );
};

export default Internal_User;
