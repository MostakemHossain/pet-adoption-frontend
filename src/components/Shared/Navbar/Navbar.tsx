"use client";

import { Box, Stack, Typography } from "@mui/material";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation"; 

const Navbar = () => {
  const AuthMenus = dynamic(() => import("@/components/UI/AuthMenus"), {
    ssr: false,
  });


  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <Stack
      px={5}
      boxShadow={1}
      bgcolor={"white"}
      py={2}
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      sx={{
        position: { xs: "relative", md: "sticky" },
        top: 0,
        zIndex: 100,
      }}
    >
      <Box>
        <Image src="/pet-logo.png" alt="logo" width={50} height={50} />
        <Typography fontWeight={700} textAlign="center" fontSize={11}>
          <Box component="span" color="primary.main">
            Pet
          </Box>{" "}
          Adoption
        </Typography>
      </Box>
      <Stack
        sx={{
          display: { xs: "none", md: "flex" },
        }}
        direction="row"
        ml={5}
        gap={4}
        justifyContent="space-between"
      >
        {/* Navigation Links */}
        {[
          { label: "Home", href: "/" },
          { label: "Pets", href: "/allPets" },
          { label: "About", href: "/about" },
          { label: "Contact", href: "/contact" },
        ].map((link) => (
          <Typography
            key={link.href}
            fontWeight={700}
            component={Link}
            href={link.href}
            sx={{
              position: "relative",
              textDecoration: "none",
              color: isActive(link.href) ? "primary.main" : "black",
              "&:hover": {
                color: "primary.main",
              },
              "&::after": {
                content: '""',
                position: "absolute",
                bottom: -2,
                left: 0,
                width: "100%",
                height: 2,
                backgroundColor: isActive(link.href)
                  ? "primary.main"
                  : "transparent",
                transition: "background-color 0.3s ease",
              },
              "&:hover::after": {
                backgroundColor: "primary.main",
              },
            }}
          >
            {link.label}
          </Typography>
        ))}
      </Stack>

      {/* Call Us and profile */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 3,
        }}
      >
        <AuthMenus />

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            color: "primary.main",
          }}
        >
          <Box>
            <Image
              alt="phone"
              src="https://tailwag.progressionstudios.com/wp-content/uploads/2022/04/phone-icon.png"
              width={50}
              height={20}
            />
          </Box>
          {/* Call us */}
          <Box>
            <Typography fontSize={16} fontWeight={700}>
              123-456-7890
            </Typography>
            <Typography color="gray" fontSize={13}>
              Call Us Today
            </Typography>
          </Box>
        </Box>
      </Box>
    </Stack>
  );
};

export default Navbar;
