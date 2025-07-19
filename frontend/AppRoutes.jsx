import { Routes, Route } from "react-router-dom";
import AnimalPage from "./src/containers/AnimalPage";
import HomePage from "./src/containers/HomePage";
import ProfilePage from "./src/containers/ProfilePage";
import AboutUsPage from "./src/containers/AboutUsPage";

function AppRoutes() {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="/animalPage" element={<AnimalPage />} />
      <Route path="/profilePage" element={<ProfilePage />} />
      <Route path="/aboutUsPage" element={<AboutUsPage />} />
    </Routes>
  );
}

export default AppRoutes;
