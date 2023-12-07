import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

const BasicTextField = ({ label, variant, id, defaultValue }) => {
  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id={id}
        label={label}
        variant={variant}
        defaultValue={defaultValue}
      />
    </Box>
  );
};
export default BasicTextField;
