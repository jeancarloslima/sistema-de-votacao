import { Container } from "@mui/material";
import "./App.css";
import VoteCard from "./components/assets/VoteCard";
import ResultPage from "./components/pages/ResultPage";

function App() {
  const voted = true;

  return (
    <Container
      sx={{
        height: "100dvh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      {voted ? <ResultPage /> : <VoteCard />}
    </Container>
  );
}

export default App;
