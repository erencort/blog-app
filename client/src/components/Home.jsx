import React from "react";
import Posts from "./Posts";
import Form from "./Form";
import { Grid } from "@mui/material";

function Home() {
  return (
    <Grid
      container
      justifyContent="space-between"
      alignItems="stretch"
      spacing={2}
    >
      <Grid item xs={12} sm={7}>
        <Posts />
      </Grid>
      <Grid xs={12} sm={4}>
        <Form />
      </Grid>
    </Grid>
  );
}

export default Home;
