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

export default function VoteCard() {
  const [vote, setVote] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!vote) {
      setError(true);
      return;
    }

    setError(false);
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
              value="JavaScript"
              control={<Radio />}
              label="JavaScript"
            />
            <FormControlLabel
              value="Python"
              control={<Radio />}
              label="Python"
            />
            <FormControlLabel value="Java" control={<Radio />} label="Java" />
            <FormControlLabel value="C#" control={<Radio />} label="C#" />
            <FormControlLabel value="C++" control={<Radio />} label="C++" />
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
