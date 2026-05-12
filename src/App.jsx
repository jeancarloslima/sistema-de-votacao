import "./App.css";
import { Container } from "@mui/material";
import VoteCard from "./components/assets/VoteCard";
import ResultPage from "./components/pages/ResultPage";
import { useSelector } from "react-redux";

function App() {
  const { voted } = useSelector((state) => state.votes.voted);

  return (
    <Container
      sx={{
        height: "100dvh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <h1>Testi {voted ? "true" : "false"}</h1>
      {voted ? <ResultPage /> : <VoteCard />}
    </Container>
  );
}

export default App;
