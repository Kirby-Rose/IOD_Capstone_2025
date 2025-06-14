import { Box } from "@mui/material";
import Navbar from "./Navbar";
import Socials from "./Socials";

const Header = () => {
  return (
    <Box>
      <Box>Branding</Box>
      <Box>
        <Socials></Socials>
      </Box>
      <Navbar></Navbar>
    </Box>
  );
};

export default Header;
