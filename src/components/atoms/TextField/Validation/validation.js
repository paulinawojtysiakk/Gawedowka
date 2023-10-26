import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

const ValidationTextField = () => {
  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          error
          id="filled-error"
          label="Error"
          defaultValue="Hello World"
          variant="filled"
        />
      </div>
    </Box>
  );
};

export default ValidationTextField;
