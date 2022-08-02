import { Container } from "@mui/system";
import "./App.css";
import Posts from "./components/Posts";

function App() {
  return (
    <div>
      <Container maxWidth="xl">
        <Posts />
      </Container>
    </div>
  );
}

export default App;
