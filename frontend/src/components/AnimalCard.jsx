import * as React from "react";
import { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";

const AnimalCard = ({ filters }) => {
  const [data, setData] = React.useState([]);
  const [filteredData, setFilteredData] = useState(undefined);

  useEffect(() => {
    fetch("http://localhost:8073/api/fullAnimal")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((response) => {
        if (response?.data) setData(response.data);
      })
      .catch((error) => console.error("Fetch error:", error));
  }, []);

  useEffect(() => {
    if (data.length > 0) {
      filter(
        filters?.animal,
        filters?.size,
        filters?.medicalCare,
        filters?.energyLevel
      );
    }

    if (!data || data.length === 0) {
      console.log("No data found.");
    }
  }, [filters, data]);

  // FUNCTIONS

  const filter = (animal, size, medicalCare, energyLevel) => {
    setFilteredData(undefined);
    const currentData = [...data];

    const filterData = currentData
      .filter((item) => {
        if (animal && animal !== "NotDefined") {
          return item.animal === animal;
        } else {
          return true;
        }
      })
      .filter((item) => {
        if (size && size !== "NotDefined") {
          return item.size === size;
        } else {
          return true;
        }
      })
      .filter((item) => {
        if (medicalCare !== "NotDefined") {
          console.log("check", item);
          return item.medicalCare === medicalCare;
        } else {
          return true;
        }
      })
      .filter((item) => {
        if (energyLevel && energyLevel !== "NotDefined") {
          return item.energyLevel === energyLevel;
        } else {
          return true;
        }
      });
    setFilteredData(filterData);
  };

  if (data.length < 0) return <Typography>Loading...</Typography>;

  const filteredDataDisplayHandler = () => {
    if (filteredData.length > 0) {
      return displayCards(filteredData);
    }

    return <Typography>No matching pets</Typography>;
  };

  const displayCards = (data) => {
    return data?.map((fullAnimal) => (
      <Card
        key={fullAnimal.animalId}
        sx={{ maxWidth: 345, marginBottom: 2, color: "#b5e5e7" }}
      >
        <CardHeader subheader={fullAnimal.petName} />
        <CardMedia
          component="img"
          height="194"
          image={fullAnimal.photoURL}
          alt={fullAnimal.petName}
        />
        <CardContent>
          <Typography variant="header2" sx={{ color: "text.secondary" }}>
            {" "}
            Description
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            Breed: {fullAnimal.breed}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            Birthdate: {fullAnimal.birthdate}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            Size: {fullAnimal.size}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            Colouring: {fullAnimal.colour}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            Characteristics: {fullAnimal.characteristics}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            Personality: {fullAnimal.description}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            Has lived with children? {fullAnimal.livedWithChildren}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            Issues with anxiety? {fullAnimal.anxiety}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            Issues with aggression? {fullAnimal.aggression}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            Energy level: {fullAnimal.energyLevel}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            Current exercise routine: {fullAnimal.exerciseRoutine}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            Training received? {fullAnimal.trainingReceived}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            Other information: {fullAnimal.otherInfo}
          </Typography>
        </CardContent>

        <CardContent>
          <Typography variant="header2" sx={{ color: "text.secondary" }}>
            {" "}
            Medical
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            Vaccinations received: {fullAnimal.vaccination}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            Desexed? {fullAnimal.desexed}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            Medical history: {fullAnimal.medicalHistory}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            Medical care: {fullAnimal.medicalCare}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            Ongoing health requirements: {fullAnimal.ongoingHealthRequirements}
          </Typography>
        </CardContent>
        <CardContent>
          <Typography variant="header2" sx={{ color: "text.secondary" }}>
            {" "}
            Status
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            Animal Status: {fullAnimal.status}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            Animal Location: {fullAnimal.location}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            Health Status: {fullAnimal.healthStatus}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            Reason for surrender: {fullAnimal.reasonForSurrender}
          </Typography>
        </CardContent>
      </Card>
    ));
  };

  return (
    <Box>
      <Box
        display="flex"
        maxHeight={"95vh"}
        flexWrap={"wrap"}
        gap={2}
        height={"inherit"}
        justifyContent={"space-around"}
        sx={{
          scrollbarWidth: "none",
          overflow: "auto",
        }}
      >
        {filteredData === undefined
          ? displayCards(data)
          : filteredDataDisplayHandler()}
      </Box>
    </Box>
  );
};

export default AnimalCard;
