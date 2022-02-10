import React from "react";
import { TextField } from "@mui/material";

const Register = () => {
  return (
    <div className="parent">
      <div className="form">
        <TextField label="Username" variant="outlined" />
        <TextField label="Email" variant="outlined" />
      </div>
    </div>
  );
};

export default Register;
