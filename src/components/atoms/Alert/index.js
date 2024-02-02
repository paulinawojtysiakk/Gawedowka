import * as React from "react";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";

const BasicAlert = ({ severity, text, ...props }) => {
  return (
    <Stack spacing={2}>
      <Alert severity={severity} {...props}>
        {text}
      </Alert>
    </Stack>
  );
};

export default BasicAlert;

// <Alert severity="error">This is an error alert</Alert>
/* <Alert severity="warning">This is a warning alert</Alert>
<Alert severity="info">This is an info alert</Alert>
<Alert severity="success">This is a success alert</Alert> */
