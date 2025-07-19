import { Box, Typography } from "@mui/material";
import ImageQuilt from "../components/ImageQuilt";

const HomePage = () => {
  // VARIABLES/STATE LIVE HERE

  // FUNCTIONS/EFFECTS LIVE HERE

  // RETURN LIVES HERE
  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <Typography
        display={"flex"}
        width={"inherit"}
        pt="10px"
        direction="row"
        align="center"
        variant="body1"
        sx={{ color: "#1e95d4", fontSize: "1.5rem", mb: 2 }}
      >
        🐾 Welcome to a community where second chances begin and lifelong
        friendships are found. Our platform connects foster carers, pet owners
        seeking new homes for their beloved animals, and families ready to adopt
        with open hearts. With a powerful database and intuitive tools, we make
        it easy to match pets with their perfect people—ensuring safe, loving
        transitions every step of the way. Whether you’re looking to give or
        receive a little more love, this is where tails wag and stories begin.🐾
      </Typography>
      <ImageQuilt />
    </Box>
  );
};

export default HomePage;
