import { Box, LinearProgress, Paper, Typography } from "@mui/material";
import { useSelector } from "react-redux";

export default function ResultCard({ voteTitle, voteQuantity }) {
    const totalVotes = useSelector((state) => state.votes.totalVotes);

  return (
    <Paper
      elevation={4}
      sx={{
        width: "100%",
        maxWidth: "400px",
        margin: "0 auto",
        padding: 4,
        display: "flex",
        flexDirection: "column",
        gap: 4,
      }}
    >
        <div>
            <Typography sx={{ marginBottom: 2 }}>
                {voteTitle}
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center" }}>
                <Box sx={{ width: "100%", mr: 1}}>
                    <LinearProgress variant="determinate" value={(voteQuantity / totalVotes) * 100} />
                </Box>
                <Box sx={{ minWidth: 35 }}>
                    <Typography>
                        {`${Math.round((voteQuantity / totalVotes) * 100)}%`}
                    </Typography>
                </Box>
            </Box>
        </div>
    </Paper>
  );
}
