import React from "react";
import { Box, CircularProgress } from "@mui/material";

function Loader() {
  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <CircularProgress sx={{ color: "gray" }} />
    </Box>
  );
}

export default Loader;
