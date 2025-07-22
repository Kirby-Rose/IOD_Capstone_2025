import * as React from "react";
import { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";

const ProfileCard = ({ filters }) => {
  const [data, setData] = React.useState([]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8073/api/profile")
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
  }, [filters, data]);

  // FUNCTIONS;

  const filter = (animal, medicalCare) => {
    console.log("before filter", animal, medicalCare);
    setFilteredData(undefined);
    const currentData = [...data];
    const filterData = currentData
      .filter((item) => {
        if (animal && animal !== "NotDefined") {
          return item.animalBreed.toLowerCase() === animal.toLowerCase();
        } else {
          return true;
        }
      })

      .filter((item) => {
        if (medicalCare !== "NotDefined") {
          return item.medicalCare === medicalCare;
        } else {
          return true;
        }
      });

    setFilteredData(filterData);
  };

  if (data.length < 0) return <Typography>Loading...</Typography>;

  const displayCards = (data) => {
    return data?.map((profile) => (
      <Card key={profile.humanId} sx={{ maxWidth: 345, marginBottom: 2 }}>
        <CardHeader subheader={profile.humanName} />

        <CardContent>
          <Typography variant="header2" sx={{ color: "text.secondary" }}>
            {" "}
            Contact Details
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            Email: {profile.email}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            Phone: {profile.phone}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            Address: {profile.address}
          </Typography>
        </CardContent>

        <CardContent>
          <Typography variant="header2" sx={{ color: "text.secondary" }}>
            {" "}
            Housing Information
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            Fenced yard? {profile.fencedYard}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            Pets allowed inside? {profile.allowedInside}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            Children in house? {profile.childrenInHouse}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            Elderly or Vulnerable in house? {profile.elderlyVulnerableInHouse}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            Other animals in house? {profile.otherAnimalsInHouse}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            Home check complete? {profile.homeCheck}
          </Typography>
        </CardContent>

        <CardContent>
          <Typography variant="header2" sx={{ color: "text.secondary" }}>
            {" "}
            Caring Capacity
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            Animal Breed/s: {profile.animalBreed}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            Energy Level? {profile.energyLevel}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            Training: {profile.training}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            Availability: {profile.availability}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            Exercise: {profile.exercise}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            Medical care: {profile.medicalCare}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            Gestational Care: {profile.gestationalCare}
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
        {filteredData.length > 0
          ? displayCards(filteredData)
          : displayCards(data)}
      </Box>
    </Box>
  );
};

export default ProfileCard;
