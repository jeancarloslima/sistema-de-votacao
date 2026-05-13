import { Box, Paper, Typography, Grow, Divider } from "@mui/material";
import ResultCard from "../../assets/ResultCard";
import { useSelector } from "react-redux";

export default function ResultPage() {
  const options = useSelector((state) => state.votes.options);

  return (
    <Grow in={true} timeout={800}>
      <Paper
        elevation={6}
        sx={{
          maxWidth: 500,
          width: "100%",
          margin: "0 auto",
          padding: 4,
          borderRadius: 4,
        }}
      >
        <Typography variant="h4" fontWeight="bold" textAlign="center" mb={1}>
          Resultados
        </Typography>

        <Divider sx={{ mb: 4 }} />

        <Box sx={{ display: "flex", flexDirection: "column" }}>
          {options.map((item) => (
            <ResultCard
              key={item.id}
              voteTitle={item.name}
              voteQuantity={item.numberOfVotes}
            />
          ))}
        </Box>
      </Paper>
    </Grow>
  );
}
