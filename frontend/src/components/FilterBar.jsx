import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";

const FilterBar = ({ filterCallback }) => {
  const [animal, setAnimal] = React.useState("NotDefined");
  const [size, setSize] = React.useState("NotDefined");
  const [medicalCare, setMedicalCare] = React.useState("NotDefined");
  const [energyLevel, setEnergyLevel] = React.useState("NotDefined");
  //= (animal, size, medicalCare, energyLevel)

  const handleAnimalChange = (event) => {
    const animalSelected = event.target.value;
    setAnimal(animalSelected);

    const storedSize = size;
    const storedMedicalCare = medicalCare;
    const storedEnergyLevel = energyLevel;
    filterCallback(
      animalSelected,
      storedSize,
      storedMedicalCare,
      storedEnergyLevel
    );
  };

  const handleSizeChange = (event) => {
    const sizeSelected = event.target.value;
    setSize(sizeSelected);

    const storedAnimal = animal;
    const storedMedicalCare = medicalCare;
    const storedEnergyLevel = energyLevel;
    filterCallback(
      storedAnimal,
      sizeSelected,
      storedMedicalCare,
      storedEnergyLevel
    );
  };

  const handleMedicalChange = (event) => {
    const medicalCareSelected = event.target.value;
    setMedicalCare(medicalCareSelected);

    const storedAnimal = animal;
    const storedSize = size;
    const storedEnergyLevel = energyLevel;
    filterCallback(
      storedAnimal,
      storedSize,
      medicalCareSelected,
      storedEnergyLevel
    );
  };

  const handleEnergyLevelChange = (event) => {
    const energyLevelSelected = event.target.value;
    setEnergyLevel(energyLevelSelected);

    const storedAnimal = animal;
    const storedSize = size;
    const storedMedicalCare = medicalCare;
    filterCallback(
      storedAnimal,
      storedSize,
      storedMedicalCare,
      energyLevelSelected
    );
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" spacing={2}>
        <Toolbar>
          <InputLabel id="animal-drop-down-id">Animal </InputLabel>
          <Select
            labelId="animal-drop-down-id"
            id="animal-drop-down-select"
            value={animal}
            label="animal"
            onChange={handleAnimalChange}
          >
            <MenuItem id="dropdown-menu-item-a" value={"NotDefined"}>
              -
            </MenuItem>
            <MenuItem id="dropdown-menu-item-b" value={"Dog"}>
              Dog
            </MenuItem>
            <MenuItem id="dropdown-menu-item-c" value={"Cat"}>
              Cat
            </MenuItem>
          </Select>

          <InputLabel id="animal-drop-down-id">Size </InputLabel>
          <Select
            labelId="size-drop-down-id"
            id="size-drop-down-select"
            value={size}
            label="Size"
            onChange={handleSizeChange}
          >
            <MenuItem id="size-dropdown-menu-item-a" value={"NotDefined"}>
              -
            </MenuItem>
            <MenuItem id="size-dropdown-menu-item-b" value={"Micro"}>
              Micro
            </MenuItem>
            <MenuItem id="size-dropdown-menu-item-c" value={"Small"}>
              Small
            </MenuItem>
            <MenuItem id="size-dropdown-menu-item-c" value={"Medium"}>
              Medium
            </MenuItem>
            <MenuItem id="size-dropdown-menu-item-c" value={"Large"}>
              Large
            </MenuItem>
            <MenuItem id="size-dropdown-menu-item-c" value={"Giant"}>
              Giant
            </MenuItem>
          </Select>

          <InputLabel id="animal-drop-down-id">Medical Care </InputLabel>
          <Select
            labelId="size-drop-down-id"
            id="size-drop-down-select"
            value={medicalCare}
            label="Medical Care"
            onChange={handleMedicalChange}
          >
            <MenuItem id="size-dropdown-menu-item-a" value={"NotDefined"}>
              -
            </MenuItem>
            <MenuItem
              id="size-dropdown-menu-item-b"
              value={"Standard care requirements"}
            >
              Standard care requirements
            </MenuItem>
            <MenuItem
              id="size-dropdown-menu-item-c"
              value={"Above average care requirements"}
            >
              Above average care requirements
            </MenuItem>
            <MenuItem id="size-dropdown-menu-item-c" value={"Significant care"}>
              Significant care
            </MenuItem>
          </Select>

          <InputLabel id="animal-drop-down-id">Energy Level </InputLabel>
          <Select
            labelId="animal-drop-down-id"
            id="animal-drop-down-select"
            value={energyLevel}
            label="Energy Level"
            onChange={handleEnergyLevelChange}
          >
            <MenuItem id="dropdown-menu-item-a" value={"NotDefined"}>
              -
            </MenuItem>
            <MenuItem id="dropdown-menu-item-b" value={"None"}>
              None
            </MenuItem>
            <MenuItem id="dropdown-menu-item-c" value={"Low"}>
              Low
            </MenuItem>
            <MenuItem id="dropdown-menu-item-c" value={"Medium"}>
              Medium
            </MenuItem>
            <MenuItem id="dropdown-menu-item-c" value={"High"}>
              High
            </MenuItem>
            <MenuItem id="dropdown-menu-item-c" value={"Extreme"}>
              Extreme
            </MenuItem>
          </Select>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default FilterBar;
