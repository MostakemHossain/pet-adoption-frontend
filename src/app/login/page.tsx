"use client";

import PetForm from "@/components/Forms/PetForm";
import PetInput from "@/components/Forms/PetInput";
import { userLogin } from "@/services/actions/loginUser";
import { storeUserInfo } from "@/services/auth.services";
import {
  Box,
  Button,
  Card,
  CircularProgress,
  Grid,
  Typography,
} from "@mui/material";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import Link from "next/link";
import { useRouter } from "next/navigation"; // Use next/navigation
import { useState } from "react";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";
import { auth, googleProvider } from "../../../firebase.config";

const LoginPage = () => {
  const router = useRouter(); // Use the router for navigation
  const [loading, setLoading] = useState(false);

  const handleLogin = async (values: FieldValues) => {
    try {
      setLoading(true);
      const res = await userLogin(values);
      if (res?.success === false) {
        toast.error(res?.message);
      } else if (res?.data?.accessToken) {
        toast.success(res?.message);
        storeUserInfo({ accessToken: res?.data?.accessToken });
      }
    } catch (err: any) {
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleDummyLogin = async (email: string, password: string) => {
    await handleLogin({ email, password });
  };

  const handleGoogleLogin = async () => {
    setLoading(true);
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential?.accessToken;
      const user = result.user;
    

      if (token && user) {
        toast.success("Logged in with Google");

        storeUserInfo({ accessToken: token });
        router.push("/dashboard/user");
      }
    } catch (error: any) {
      toast.error("Google login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      sx={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1504208434309-cb69f4fe52b0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
      }}
    >
      <Box
        sx={{
          maxWidth: 600,
          width: "100%",
          boxShadow: 3,
          backgroundColor: "rgba(255, 255, 255, 0.9)",
          borderRadius: 2,
          padding: 4,
          textAlign: "center",
        }}
      >
        <Typography variant="h4" mb={3} fontWeight={600}>
          Welcome Back
        </Typography>
        <Typography variant="body1" color="textSecondary" mb={3}>
          Please login to continue
        </Typography>

        <PetForm
          onSubmit={handleLogin}
          defaultValues={{
            email: "",
            password: "",
          }}
        >
          <Grid container spacing={2} my={1}>
            <Grid item xs={12}>
              <PetInput
                name="email"
                label="Email"
                type="email"
                fullWidth={true}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <PetInput
                name="password"
                label="Password"
                type="password"
                fullWidth={true}
                required
              />
            </Grid>
          </Grid>
          <Typography mb={1} textAlign="end" component="p">
            <Link
              href={`/forgot-password`}
              style={{
                cursor: "pointer",
                color: "blue",
                textDecoration: "underline",
              }}
            >
              Forgot Password?
            </Link>
          </Typography>
          <Button
            sx={{ margin: "10px 0px" }}
            fullWidth
            disabled={loading}
            type="submit"
            variant="contained"
            color="primary"
          >
            {loading ? <CircularProgress size={24} /> : "Login"}
          </Button>
        </PetForm>

        <Box mt={2}>
          <Button
            fullWidth
            variant="outlined"
            onClick={handleGoogleLogin}
            disabled={loading}
          >
            {loading ? <CircularProgress size={24} /> : "Login with Google"}
          </Button>
        </Box>

        <Card
          sx={{
            marginTop: 3,
            textAlign: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              gap: 2,
              justifyContent: "center",
              mb: 2,
            }}
          >
            <Button
              variant="outlined"
              onClick={() => handleDummyLogin("user0000@gmail.com", "Pet1234!")}
              disabled={loading}
            >
              {loading ? <CircularProgress size={24} /> : "Login as User"}
            </Button>
            <Button
              variant="outlined"
              onClick={() => handleDummyLogin("admin@gamil.com", "Pet1234!")}
              disabled={loading}
            >
              {loading ? <CircularProgress size={24} /> : "Login as Admin"}
            </Button>
          </Box>
        </Card>

        <Typography mt={2}>
          Don&apos;t have an account?{" "}
          <Link href="/register" style={{ color: "blue" }}>
            Create an account
          </Link>
        </Typography>
      </Box>
    </Box>
  );
};

export default LoginPage;
