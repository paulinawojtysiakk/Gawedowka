"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const BasicSelect = ({ text, label, option1, option2, option3 }) => {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Box sx={{ m: 1, width: "25ch" }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">{text}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label={label}
          onChange={handleChange}
        >
          <MenuItem value={option1}>{option1}</MenuItem>
          <MenuItem value={option2}>{option2}</MenuItem>
          <MenuItem value={option3}>{option3}</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};
export default BasicSelect;
