import React from "react";
import { Box, Typography } from "@mui/material";
function Header() {
  return (
    <Box sx={{ marginTop: 3, backgroundColor: "white", borderRadius: "16px" }}>
      <Typography textAlign="center" variant="h3">
        Blog App
      </Typography>
    </Box>
  );
}

export default Header;
