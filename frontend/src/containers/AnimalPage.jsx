import { Stack } from "@mui/material";
import AnimalCard from "../components/AnimalCard";
import FilterBar from "../components/FilterBar";
import { useState } from "react";

const AnimalPage = () => {
  // VARIABLES/STATE LIVE HERE
  const [filters, setFilters] = useState({
    animal: "NotDefined",
    size: "NotDefined",
    medicalCare: "NotDefined",
    energyLevel: "NotDefined",
  });

  // FUNCTIONS/EFFECTS LIVE HERE
  const filter = (animal, size, medicalCare, energyLevel) => {
    console.log("1.) before filter", animal, size, medicalCare, energyLevel);
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

      <Stack flex={4}>
        <AnimalCard filters={filters} />
      </Stack>
    </Stack>
  );
};

export default AnimalPage;
