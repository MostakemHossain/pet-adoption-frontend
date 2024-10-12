"use client";

import PetFileUploader from "@/components/Forms/PetFileUploader";
import PetForm from "@/components/Forms/PetForm";
import PetInput from "@/components/Forms/PetInput";
import PetSelect from "@/components/Forms/PetSelect";
import { useCreatePetPostMutation } from "@/redux/api/petsApi";
import { modifyPayload } from "@/utils/modifyPayload";
import {
  Button,
  CircularProgress,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

const validationSchema = z.object({
  name: z.string().min(3, "Name must be at least 3 characters"),
  species: z.string().min(3, "Species must be at least 3 characters"),
  breed: z.string().min(3, "Breed must be at least 3 characters"),
  age: z.number().min(1, "Age must be at least 1 character"),
  size: z.string().min(1, "Size must be at least 1 character"),
  location: z.string().min(3, "Location must be at least 3 characters"),
  description: z.string().min(3, "Description must be at least 3 characters"),
  temperament: z.string().min(3, "Temperament must be at least 3 characters"),
  medicalHistory: z
    .string()
    .min(3, "Medical History must be at least 3 characters"),
  adoptionRequirements: z
    .string()
    .min(3, "Adoption Requirements must be at least 3 characters"),
});

const NewAdoptionPostPage = () => {
  const [createPetPost] = useCreatePetPostMutation();
  const [loading, setLoading] = useState(false); 

  const species = [
    { value: "DOG", label: "Dog" },
    { value: "CAT", label: "Cat" },
    { value: "BIRD", label: "Bird" },
  ];

  const sizes = [
    { value: "SMALL", label: "Small" },
    { value: "MEDIUM", label: "Medium" },
    { value: "LARGE", label: "Large" },
  ];

  const handleFormSubmit = async (values: FieldValues) => {
    setLoading(true); 
    values.age = parseInt(values.age);
    const data = modifyPayload(values);

    try {
      const res = await createPetPost(data).unwrap();
      console.log(res);
      if (res.id) {
        toast.success("Pet Added successfully");
      }
    } catch (err: any) {
      toast.error("Failed to add pet"); 
    } finally {
      setLoading(false); 
    }
  };

  return (
    <Container
      sx={{
        boxShadow:
          "rgba(145, 158, 171, 0.2) 0px 0px 2px 0px, rgba(145, 158, 171, 0.12) 0px 12px 24px -4px;",
        borderRadius: "10px",
        overflow: "hidden",
        padding: "30px",
      }}
    >
      <Typography sx={{
        color:"#F9524E"
      }} variant="h3" align="center" gutterBottom>
        New Adoption Post
      </Typography>
      <PetForm
        onSubmit={handleFormSubmit}
        
        defaultValues={{
          name: "",
          species: "",
          breed: "",
          age: "",
          size: "",
          location: "",
          description: "",
          temperament: "",
          medicalHistory: "",
          adoptionRequirements: "",
        }}
      >
        <Grid container spacing={2} my={1}>
          <Grid item xs={12} md={4}>
            <PetInput name="name" label="Name" type="text" fullWidth />
          </Grid>
          <Grid item xs={12} md={4}>
            <PetSelect
              menu={species}
              name="species"
              label="Species"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <PetInput name="breed" label="Breed" type="text" fullWidth />
          </Grid>
        </Grid>
        <Grid container spacing={2} my={1}>
          <Grid item xs={12} md={4}>
            <PetInput name="age" label="Age" type="number" fullWidth />
          </Grid>
          <Grid item xs={12} md={4}>
            <PetSelect menu={sizes} name="size" label="Size" fullWidth />
          </Grid>
          <Grid item xs={12} md={4}>
            <PetInput name="location" label="Location" type="text" fullWidth />
          </Grid>
        </Grid>
        <Grid container spacing={2} my={1}>
          <Grid item xs={12}>
            <PetInput
              name="description"
              label="Description"
              type="text"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <PetInput
              name="temperament"
              label="Temperament"
              type="text"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <PetInput
              name="medicalHistory"
              label="Medical History"
              type="text"
              fullWidth
            />
          </Grid>
        </Grid>
        <Grid container spacing={2} my={1}>
          <Grid item xs={12}>
            <PetInput
              name="adoptionRequirements"
              label="Adoption Requirements"
              type="text"
              fullWidth
            />
          </Grid>
        </Grid>
        <Grid container spacing={2} my={1}>
          <Grid item xs={12}>
            <PetFileUploader
              name="file"
              label="Upload Image"
              accept="image/*"
              multiple={false}
              sx={{ display: "none" }}
              required
              fullWidth
            />
          </Grid>
        </Grid>
        <Button
          sx={{ margin: "10px 0px" }}
          type="submit"
          disabled={loading} 
        >
          {loading ? <CircularProgress size={24} /> : "Submit"}{" "}
         
        </Button>
      </PetForm>
    </Container>
  );
};

export default NewAdoptionPostPage;
