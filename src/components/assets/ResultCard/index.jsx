import { Box, LinearProgress, Typography } from "@mui/material";
import { useSelector } from "react-redux";

export default function ResultCard({ voteTitle, voteQuantity }) {
  const totalVotes = useSelector((state) => state.votes.totalVotes);
  const percentage =
    totalVotes === 0 ? 0 : Math.round((voteQuantity / totalVotes) * 100);

  return (
    <Box sx={{ width: "100%", mb: 3 }}>
      <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
        <Typography variant="body1" fontWeight="500" color="text.secondary">
          {voteTitle}
        </Typography>
        <Typography variant="body1" fontWeight="bold" color="primary">
          {percentage}%
        </Typography>
      </Box>
      <LinearProgress
        variant="determinate"
        value={percentage}
        sx={{
          height: 10,
          borderRadius: 5,
          backgroundColor: "#e2e8f0",
          "& .MUILinearProgress-bar": { borderRadius: 5 },
        }}
      />
    </Box>
  );
}
