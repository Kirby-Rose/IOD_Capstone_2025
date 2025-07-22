import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Button color="inherit" component={Link} to="/">
            Home
          </Button>
          <Button color="inherit" component={Link} to="/aboutUsPage">
            About Us
          </Button>
          <Button color="inherit" component={Link} to="/animalPage">
            Adopt
          </Button>
          <Button color="inherit" component={Link} to="/profilePage">
            Match
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
