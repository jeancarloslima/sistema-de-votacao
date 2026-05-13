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
import { useDispatch, useSelector } from "react-redux";
import { addVote } from "../../context/voteSlice";

export default function VoteCard() {
  const [vote, setVote] = useState(0);
  const [error, setError] = useState(false);
  const options = useSelector((state) => state.votes.options);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!vote) {
      setError(true);
      return;
    }

    setError(false);
    dispatch(addVote(vote));
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
        <FormControl error={error}>
          <FormLabel>Escolha uma das opções abaixo:</FormLabel>
          <RadioGroup
            value={vote}
            onChange={(e) => setVote(e.target.value)}
            sx={{ marginTop: 3 }}
          >
            {options.map((item) => (
              <FormControlLabel
                key={item.id}
                value={item.id}
                control={<Radio />}
                label={item.name}
              />
            ))}
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
