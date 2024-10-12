import AllPetsComponent from "@/components/allPetsComponent/AllPetsComponent";
import { Container } from "@mui/material";

const AllPetsPage = async () => {
  const allPets = await fetch("http://localhost:8000/api/v1/pets/all");
  const pets = await allPets.json();
  return (
    <Container
      sx={{
        my: 2,
      }}
    >
      <AllPetsComponent pets={pets} />
    </Container>
  );
};

export default AllPetsPage;
