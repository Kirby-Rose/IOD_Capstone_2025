import { Stack } from "@mui/material";
import ProfileCard from "../components/ProfileCard";
import AnimalCard from "../components/AnimalCard";
import FilterBar from "../components/FilterBar";
import { useState } from "react";

export const FILTER_NOT_DEFINED = "NotDefined";

const ProfilePage = () => {
  // VARIABLES/STATE LIVE HERE
  const [filters, setFilters] = useState({
    animal: FILTER_NOT_DEFINED,
    size: FILTER_NOT_DEFINED,
    medicalCare: FILTER_NOT_DEFINED,
    energyLevel: FILTER_NOT_DEFINED,
  });

  // FUNCTIONS/EFFECTS LIVE HERE
  const filter = (animal, size, medicalCare, energyLevel) => {
    console.log("before filter", animal, size, medicalCare, energyLevel);
    setFilters({
      animal,
      size,
      medicalCare,
      energyLevel,
    });
  };

  // RETURN LIVES HERE
  return (
    <Stack direction="column" spacing={2}>
      <FilterBar filterCallback={filter} />
      <Stack direction="row" spacing={4}>
        <ProfileCard filters={filters} />
        <AnimalCard filters={filters} />
      </Stack>
    </Stack>
  );
};

export default ProfilePage;
