"use client";
import PetsIcon from "@mui/icons-material/Pets";
import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import { useEffect } from "react";

const cardInfo = [
  {
    title: "Grooming Services",
    description:
      "Our expert groomers ensure your pet looks and feels their best.",
    icon: "https://tailwag.progressionstudios.com/wp-content/uploads/2022/04/icon1.png",
  },
  {
    title: "Veterinary 24/7",
    description:
      "Round-the-clock medical support for the well-being of your pets.",
    icon: "https://tailwag.progressionstudios.com/wp-content/uploads/2022/04/icon2.png",
  },
  {
    title: "Fun Activities",
    description:
      "Engage your pets with exciting activities for a happy, healthy life.",
    icon: "https://tailwag.progressionstudios.com/wp-content/uploads/2022/04/icon3.png",
  },
];

const AboutUs = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <Container sx={{ marginTop: 12, marginBottom: 12 }}>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        gap={4}
        justifyContent="center"
        alignItems="center"
        data-aos="fade-up"
      >
        {cardInfo.map((info) => (
          <Box
            key={info.title}
            boxShadow={1}
            borderRadius={2}
            p={2}
            gap={3}
            display="flex"
            flexDirection={{ xs: "column", md: "row" }}
            alignItems="center"
            justifyContent="center"
            textAlign={{ xs: "center", md: "left" }}
            width={{ xs: "100%", sm: "auto" }}
            maxWidth={345}
            data-aos="zoom-in"
          >
            <Box
              component="img"
              src={info.icon}
              alt={info.title}
              width={63}
              height={63}
            />
            <Box
              sx={{
                textAlign: { xs: "center", md: "left" },
                mt: { xs: 2, md: 0 },
              }}
            >
              <Typography color="secondary.main" fontWeight={700} fontSize={18}>
                {info.title}
              </Typography>
              <Typography color="gray">{info.description}</Typography>
            </Box>
          </Box>
        ))}
      </Stack>

      <Grid
        container
        mt={12}
        alignItems="center"
        spacing={2}
        data-aos="fade-right"
      >
        <Grid item xs={12} md={6}>
          <Image
            src="https://tailwag.progressionstudios.com/wp-content/uploads/2022/04/dog-P228UWM.jpg"
            width={1200}
            height={1200}
            objectFit="cover"
            alt="pet"
            data-aos="flip-left"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography
            color="secondary.main"
            fontWeight={700}
            data-aos="fade-down"
          >
            About Us
          </Typography>
          <Typography fontSize={30} fontWeight={700} data-aos="fade-up">
            Dedicated to Finding Forever Homes
          </Typography>
          <Typography py={5} color="gray" data-aos="fade-up">
            Our mission is to help every pet find their perfect match. With
            years of experience in animal rescue and adoption, we are committed
            to ensuring that every animal gets a chance at a better life.
          </Typography>
          <Typography color="gray" data-aos="fade-up">
            From the moment you start the adoption process to the day you take
            your pet home, we provide guidance and support every step of the
            way.
          </Typography>
          <ul className="my-5 flex flex-col gap-3">
            <li className="flex gap-3 items-center">
              <PetsIcon sx={{ color: "primary.main", fontSize: "sm" }} />
              <Typography color="gray" data-aos="fade-up">
                Nationwide network of shelters and volunteers.
              </Typography>
            </li>
            <li className="flex gap-3 items-center">
              <PetsIcon sx={{ color: "primary.main", fontSize: "sm" }} />
              <Typography color="gray" data-aos="fade-up">
                Ongoing support throughout the adoption process.
              </Typography>
            </li>
            <li className="flex gap-3 items-center">
              <PetsIcon sx={{ color: "primary.main", fontSize: "sm" }} />
              <Typography color="gray" data-aos="fade-up">
                Health checks and vaccinations for every adopted pet.
              </Typography>
            </li>
          </ul>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AboutUs;
