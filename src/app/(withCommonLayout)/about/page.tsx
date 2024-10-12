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
      "Keep your pets happy and healthy with our professional grooming services.",
    icon: "https://tailwag.progressionstudios.com/wp-content/uploads/2022/04/icon1.png",
  },
  {
    title: "Veterinary 24/7",
    description:
      "Round-the-clock veterinary care to ensure your pets receive the best medical attention.",
    icon: "https://tailwag.progressionstudios.com/wp-content/uploads/2022/04/icon2.png",
  },
  {
    title: "Fun Activities",
    description:
      "Engage your pets with a variety of fun and stimulating activities designed just for them.",
    icon: "https://tailwag.progressionstudios.com/wp-content/uploads/2022/04/icon3.png",
  },
];

const AboutPage = () => {
  useEffect(() => {
    AOS.init({ duration: 1200, once: false });
  }, []);

  return (
    <Box>
      <Box
        sx={{
          width: "100%",
          height: { xs: 200, sm: 250, md: 300 },
          position: "relative",
        }}
      >
        <Image
          src="https://images.unsplash.com/photo-1441441247730-d09529166668?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="profile"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0,0,0,0.4)",
          }}
        ></Box>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            p: 4,
          }}
        >
          <Typography
            variant="h2"
            textAlign="center"
            fontWeight={700}
            color="white"
            data-aos="fade-up"
          >
            About Us
          </Typography>
          <Typography
            variant="body1"
            textAlign="center"
            color="white"
            data-aos="fade-up"
          >
            Connecting Pets with Loving Families
          </Typography>
        </Box>
      </Box>

      <Container>
        <Box
          sx={{
            mt: 10,
            display: "flex",
            alignItems: "center",
            gap: 3,
          }}
          data-aos="fade-up"
        >
          <Image
            src="https://images.unsplash.com/photo-1513360371669-4adf3dd7dff8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="profile"
            width={600}
            height={600}
            className="rounded-lg"
          />
          <Box>
            <Typography variant="h4" mb={3} fontWeight={700}>
              Pet Adoption
            </Typography>
            <Typography variant="body1" color="gray">
              We believe every pet deserves a loving home. Through our platform,
              we connect abandoned and rescue pets with compassionate families,
              giving each animal a chance for a better life.
            </Typography>
          </Box>
        </Box>

        {/* Services Section */}
        <Stack
          direction={{ xs: "column", sm: "row" }}
          gap={4}
          spacing={4}
          mt={12}
          justifyContent="center"
          alignItems="center"
        >
          {cardInfo.map((info) => (
            <Box
              boxShadow={1}
              borderRadius={2}
              p={2}
              gap={2}
              key={info.title}
              display="flex"
              flexDirection={{ xs: "column", md: "row" }}
              alignItems="center"
              justifyContent="center"
              textAlign={{ xs: "center", md: "left" }}
              width={{ xs: "100%", sm: "auto" }}
              maxWidth={345}
              data-aos="fade-up"
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
                  display: "flex",
                  flexDirection: "column",
                  gap: 1,
                  mt: { xs: 2, md: 0 },
                }}
              >
                <Typography
                  color="secondary.main"
                  fontWeight={700}
                  fontSize={18}
                >
                  {info.title}
                </Typography>
                <Typography color="gray">{info.description}</Typography>
              </Box>
            </Box>
          ))}
        </Stack>

        {/* About Us Section */}
        <Grid mt={12} alignItems="center" container spacing={2}>
          <Grid item xs={12} md={6}>
            <Image
              src="https://tailwag.progressionstudios.com/wp-content/uploads/2022/04/dog-P228UWM.jpg"
              width={1200}
              height={1200}
              objectFit="cover"
              alt="pet"
              data-aos="fade-left"
            />
          </Grid>
          <Grid item xs={12} md={6} data-aos="fade-right">
            <Typography color="secondary.main" fontWeight={700}>
              About Us
            </Typography>
            <Typography fontSize={30} fontWeight={700}>
              Dedicated to Animal Welfare
            </Typography>
            <Typography py={5} color="gray">
              We are passionate about finding homes for every animal in need.
              Our team works tirelessly to rescue, rehabilitate, and rehome
              pets, ensuring they find a loving environment.
            </Typography>
            <Typography color="gray">
              With years of experience in animal care and adoption, we aim to
              make the adoption process as smooth as possible for both pets and
              families.
            </Typography>
            <ul className="my-5 flex flex-col gap-3">
              <li className="flex gap-3 items-center">
                <PetsIcon
                  sx={{
                    color: "primary.main",
                    fontSize: "sm",
                  }}
                />
                <Typography color="gray">
                  Our network of shelters and volunteers spans across the
                  country.
                </Typography>
              </li>
              <li className="flex gap-3 items-center">
                <PetsIcon
                  sx={{
                    color: "primary.main",
                    fontSize: "sm",
                  }}
                />
                <Typography color="gray">
                  We provide support and guidance throughout the adoption
                  process.
                </Typography>
              </li>
              <li className="flex gap-3 items-center">
                <PetsIcon
                  sx={{
                    color: "primary.main",
                    fontSize: "sm",
                  }}
                />
                <Typography color="gray">
                  Every adoption includes health check-ups and vaccinations.
                </Typography>
              </li>
            </ul>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default AboutPage;
