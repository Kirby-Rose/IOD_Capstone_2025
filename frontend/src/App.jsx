import "./App.css";
import Header from "./components/Header";
import AppRoutes from "../AppRoutes";
import { Box } from "@mui/material";

function App() {
  return (
    <>
      <Header></Header>
      <Box
        sx={{
          display: "flex",
          height: "86vh",
          mx: "50px",
        }}
      >
        <AppRoutes />
      </Box>
    </>
  );
}

export default App;
