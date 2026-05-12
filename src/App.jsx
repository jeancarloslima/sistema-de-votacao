import { Container } from '@mui/material';
import './App.css'
import ResultCard from './components/assets/ResultCard';
import VoteCard from './components/assets/VoteCard';

function App() {
  const voted = false;

  return (
    <Container sx={{ height: "100dvh", display: "flex", flexDirection: "column", justifyContent: "center" }}>
    {voted ? <ResultCard /> : <VoteCard />}
    </Container>
  )
}

export default App
