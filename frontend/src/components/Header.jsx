import { Box, CardMedia } from "@mui/material";
import Grid from "@mui/material/Grid";
import Navbar from "./Navbar";
import Socials from "./Socials";

const Header = () => {
  return (
    <Box sx={{ padding: 2 }}>
      <Grid container spacing={1}>
        <Grid size={4}>
          <Box sx={{ maxHeight: 150, maxWidth: 150 }}>
            <CardMedia
              id="Homeward Bound Animal"
              component="img"
              image="../assets/brand_animal.png"
              alt="Dog & cat line drawing"
            />
          </Box>
        </Grid>
        <Grid size={4}>
          <Box sx={{ maxHeight: 600, maxWidth: 600 }}>
            <CardMedia
              id="Homeward Bound Words"
              component="img"
              image="../assets/brand_word.png"
              alt="Homeward Bound. Rescue - Rehabilitate - Rehome"
            />
          </Box>
        </Grid>
        <Grid size={2}>
          <Box>
            <Socials />
          </Box>
        </Grid>
        <Grid size={10}>
          <Box>
            <Navbar />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Header;
