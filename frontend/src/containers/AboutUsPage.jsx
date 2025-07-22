import { Box, Stack, Typography } from "@mui/material";

const AboutUsPage = () => {
  // VARIABLES/STATE LIVE HERE

  // FUNCTIONS/EFFECTS LIVE HERE

  // RETURN LIVES HERE
  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <Typography
        display={"flex"}
        width={"inherit"}
        pt="10px"
        direction="row"
        align="center"
        variant="body1"
        sx={{ color: "#1e95d4", fontSize: "1.5rem", mb: 2 }}
      >
        🐾 About Us Homeward Bound began in the backyard of Jess, a passionate
        animal advocate who transformed her small, local shelter into a thriving
        mission: Rescue - Rehabilitate - Rehome. For years, Jess provided love,
        care, and safety to pets in crisis—mending broken bodies and weary
        hearts with patience and compassion. Yet as the demand grew beyond her
        physical space, she saw an opportunity to expand her impact. From that
        heartfelt dream came Homeward Bound: an online community built to
        connect foster carers, pet owners seeking new beginnings, and families
        ready to welcome a new member. Our searchable pet database and intuitive
        tools help ensure each animal finds the right match, because we believe
        the path to a better life begins with the right connection. Every
        adoption story we celebrate carries Jess’s vision forward: that no
        animal is ever too lost to be found, and every home can be a place of
        healing. This is more than a platform—it’s a promise. Rescue.
        Rehabilitate. Rehome. Repeat.
      </Typography>
      <Box
        component="img"
        sx={{
          height: 500,
          width: 700,
        }}
        alt="Jess"
        src="../../assets/jess.avif"
      />
      <Stack direction="row" spacing={2}>
        <Box
          component="img"
          sx={{
            height: 175,
            width: 200,
          }}
          alt="dog&Cat"
          src="../../assets/dog-cat.png"
        />
        <Box
          component="img"
          sx={{
            height: 175,
            width: 200,
          }}
          alt="Jess"
          src="../../assets/jess2.jpg"
        />
        <Box
          component="img"
          sx={{
            height: 175,
            width: 200,
          }}
          alt="dog&cat"
          src="../../assets/dog-cate2.jpg"
        />
      </Stack>
    </Box>
  );
};

export default AboutUsPage;
