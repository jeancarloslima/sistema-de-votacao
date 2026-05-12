import { Box, LinearProgress, Paper, Typography } from "@mui/material";

export default function ResultCard({ voteTitle, voteQuantity }) {
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
                    <LinearProgress variant="determinate" value={voteQuantity} />
                </Box>
                <Box sx={{ minWidth: 35 }}>
                    <Typography>
                        {`${Math.round(voteQuantity)}%`}
                    </Typography>
                </Box>
            </Box>
        </div>
    </Paper>
  );
}
