import React from "react";
import InputFields from "./components/InputFields";
import { Box } from "@mui/material";
import "./App.css"

function App() {
  return (
    <Box
      height="100vh"
      width="100vw"
      display="flex"
      justifyContent="center"
      alignItems="center"
      className="background"
    >
      <InputFields />
    </Box>
  );
}

export default App;
