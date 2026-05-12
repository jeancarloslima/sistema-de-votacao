import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  Paper,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addVote } from "../../context/voteSlice";

export default function VoteCard() {
  const [vote, setVote] = useState(0);
  const [error, setError] = useState(false);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!vote) {
      setError(true);
      return;
    }
    
    setError(false);
    dispatch(addVote(vote))
  };

  return (
    <Paper
      elevation={4}
      sx={{
        maxWidth: 400,
        margin: "0 auto",
        padding: 4,
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        gap: 4,
      }}
    >
      <Typography variant="h5">
        Qual é sua linguagem de programação favorita?
      </Typography>
      <form onSubmit={handleSubmit}>
        <FormControl>
          <FormLabel>Escolha uma das opções abaixo:</FormLabel>
          <RadioGroup
            value={vote}
            onChange={(e) => setVote(e.target.value)}
            sx={{ marginTop: 3 }}
          >
            <FormControlLabel
              value={1}
              control={<Radio />}
              label="JavaScript"
            />
            <FormControlLabel
              value={2}
              control={<Radio />}
              label="Python"
            />
            <FormControlLabel value={3} control={<Radio />} label="Java" />
            <FormControlLabel value={4} control={<Radio />} label="C#" />
            <FormControlLabel value={5} control={<Radio />} label="C++" />
          </RadioGroup>
          {error && (
            <FormHelperText>
              Selecione uma opção antes de enviar.
            </FormHelperText>
          )}
        </FormControl>
        <Box sx={{ marginTop: 4 }}>
          <Button type="submit" variant="contained">
            Votar
          </Button>
        </Box>
      </form>
    </Paper>
  );
}
