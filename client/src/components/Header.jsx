import React from "react";
import { Box, ButtonGroup, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
function Header() {
  return (
    <Box sx={{ marginTop: 3, backgroundColor: "white", borderRadius: "16px" }}>
      <Typography textAlign="center" variant="h3">
        Blog App
      </Typography>
      <ButtonGroup
        sx={{ marginRight: 2 }}
        size="small"
        aria-label="small button group"
      >
        <Button component={Link} to="/login" size="small">
          Login
        </Button>
        <Button component={Link} to="/register" size="small">
          Register
        </Button>
      </ButtonGroup>
    </Box>
  );
}

export default Header;
