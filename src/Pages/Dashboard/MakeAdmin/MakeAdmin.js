import { Button, TextField } from "@mui/material";
import React from "react";

const MakeAdmin = () => {
  return (
    <div>
      <h2>Make an Admin</h2>
      <form>
        <TextField sx={{ width: "50%" }} label="Email" variant="standard" />
        <Button type="submit" variant="contained">
          Make Admin
        </Button>
      </form>
    </div>
  );
};

export default MakeAdmin;
