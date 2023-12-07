import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

const BasicTextField = ({ variant, id, defaultValue, ...props }) => {
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
        variant={variant}
        defaultValue={defaultValue}
        {...props}
      />
    </Box>
  );
};
export default BasicTextField;
