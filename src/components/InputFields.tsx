import React from "react";
import Date from "./Date";
import TextField from "@mui/material/TextField";
import { Box, Button, Typography } from "@mui/material";

function InputFields() {
  const [name, setName] = React.useState("");
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      gap={4}
    >
      <Typography variant="h4">Enter name and date</Typography>
      <TextField
        placeholder="Name"
        value={name}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          setName(event.target.value);
        }}
      />
      <Date />
      <Button variant="contained">Save</Button>
    </Box>
  );
}

export default InputFields;
