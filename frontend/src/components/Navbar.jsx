import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";

const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Button color="inherit">Home</Button>
          <Button color="inherit">About Us</Button>
          <Button color="inherit">Adopt</Button>
          <Button color="inherit">Sign In</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
