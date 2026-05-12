import { Box, Typography } from "@mui/material";
import ResultCard from "../../assets/ResultCard";

export default function ResultPage() {
    return (
        <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
            <Typography variant="h5" sx={{ textAlign: "center" }}>Resultado</Typography>
            <ResultCard voteTitle={"Javascript"} voteQuantity={23} />
            <ResultCard voteTitle={"Python"} voteQuantity={25} />
            <ResultCard voteTitle={"Java"} voteQuantity={30} />
            <ResultCard voteTitle={"C#"} voteQuantity={8} />
            <ResultCard voteTitle={"C++"} voteQuantity={10} />
        </Box>
    )
}