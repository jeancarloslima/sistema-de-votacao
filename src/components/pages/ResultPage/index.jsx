import { Box, List, ListItem, Typography } from "@mui/material";
import ResultCard from "../../assets/ResultCard";
import { useSelector } from "react-redux";

export default function ResultPage() {
  const options = useSelector((state) => state.votes.options);

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
      <Typography variant="h5" sx={{ textAlign: "center" }}>
        Resultado
      </Typography>
      <List>
        {options.map((item) => (
          <ListItem key={item.id}>
            <ResultCard
              voteTitle={item.name}
              voteQuantity={item.numberOfVotes}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
}
