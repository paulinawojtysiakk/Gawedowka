import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

const ButtonText = ({ variant, text }) => (
  <Button variant={variant}>{text}</Button>
);

// const ButtonText = (props) => {
//   const { variant, text } = props;
//   return <Button variant={variant}>{text}</Button>;
// };

export default ButtonText;
