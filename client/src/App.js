import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import Form from "./components/Form";
import Header from "./components/Header";
import Posts from "./components/Posts";

function App() {
  return (
    <Container maxWidth="xl">
      <Header />
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
    </Container>
  );
}

export default App;
