import { Box, Button, Container, Typography } from "@mui/material";
import Image from "next/image";

const SecondBanner = () => {
  return (
    <Box
      sx={{
        position: "relative",
        overflow: "hidden",
        minHeight: "500px",
      }}
    >
      <Image
        src="https://tailwag.progressionstudios.com/wp-content/uploads/2022/04/guy-holding-smiling-puppy_t20_JaNme9.jpg"
        alt="banner"
        layout="fill"
        objectPosition="left"
        objectFit="cover"
      />
      <Container>
        <Box>
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              transform: "translateY(-50%)",
            }}
          >
            <Typography
              style={{
                fontSize: "45px",
                fontWeight: "bold",
                color: "white",
              }}
            >
              Looking to welcome a furry friend into your family?
            </Typography>
            <Typography
              sx={{
                maxWidth: "60ch",
              }}
              color="white"
              py={4}
            >
              Explore our range of adorable pets, ready to bring joy and love
              into your home. Find your perfect companion today.
            </Typography>
            <Button component="a" href="#allPets">
              View Puppies{" "}
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default SecondBanner;
