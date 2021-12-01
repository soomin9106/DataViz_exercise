import React from "react";
import { FormControlLabel, IconButton } from "@material-ui/core";
import { DataGrid } from "@material-ui/data-grid";
import EditIcon from "@material-ui/icons/Edit";
import { blue } from "@material-ui/core/colors";

const MatEdit = ({ index }) => {
  const handleEditClick = () => {
    // some action
    console.log('click!')
  };

  return (
    <FormControlLabel
      control={
        <IconButton
          color="secondary"
          aria-label="add an alarm"
          onClick={handleEditClick}
        >
          <EditIcon style={{ color: blue[500] }} />
        </IconButton>
      }
    />
  );
};

const Demo = () => {
  const rows = [{ id: 1, name: "ABC", email: "xyz@gmail.com" }];
  const columns = [
    { field: "name", headerName: "Name" },
    { field: "email", headerName: "Email" },
    {
      field: "actions",
      headerName: "Actions",
      sortable: false,
      width: 140,
      disableClickEventBubbling: true,
      renderCell: (params) => {
        return (
          <div
            className="d-flex justify-content-between align-items-center"
            style={{ cursor: "pointer" }}
          >
            <MatEdit index={params.row.id} />
          </div>
        );
      }
    }
  ];

  return (
    <div style={{ height: 500, width: 500 }}>
      <DataGrid rows={rows} columns={columns} />
    </div>
  );
};

export default Demo;