"use client";

import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FieldValues } from "react-hook-form";
import { z } from "zod";
import ReuseableForm from "@/components/Forms/ReuseableForm";
import { zodResolver } from "@hookform/resolvers/zod";
import ReuseableInput from "@/components/Forms/ReuseableInput";
import Link from "next/link";

import { toast } from "sonner";
import Cookies from "js-cookie";


const validationSchemaForLogin = z.object({
  email: z
    .string()
    .email({ message: "Please Enter Your Valida Email Address"! }),

  password: z.string().min(6, " Must be at least 6 characters "),
});

const LoginPage = () => {
  const router = useRouter();
  const [error, setError] = useState("");

  const hanldeLoginSubmit = async (data: FieldValues) => {
    console.log(data);
 

try {
  const response = await axios.post(
    "http://localhost:8000/api/v1/auth/login",
    data
  );


  if (response.data.success) {
    toast.success("Login Successfully ");
   
    const accessToken = response?.data?.data?.accessToken;
    if(response?.data?.data?.accessToken){
         localStorage.setItem("accessToken", accessToken);
         Cookies.set("accessToken", accessToken);
          router.push("/dashboard/admin");
    }
  }else{
    setError(response.data.message);
  }
} catch (error) {
    
  console.error("Error:", error);
}

  };

  return (
    <div className="bg-black-100 relative flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5  ">
      <Container>
        <Stack
          sx={{
            height: "100vh",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div className="bg-white-100 rounded-xl">
            <Box
              sx={{
                maxWidth: 600,
                width: "100%",
                borderRadius: 1,
                py: 7,
                px: 6,
                textAlign: "center",
              }}
            >
              <Stack
                sx={{
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Box>
                  {/* <Image src={logo} width={50} height={50} alt="logo" /> */}
                </Box>
                <Box>
                  <Typography
                    variant="h4"
                    component="h1"
                    fontWeight={600}
                    className="text-black-100"
                  >
                    Log-In Only Admin
                  </Typography>
                </Box>
              </Stack>
              {/* For Error Message show in Server  */}
              <Box>
                {error && (
                  <Box>
                    <Typography sx={{ color: "red", textAlign: "center" }}>
                      {error}
                    </Typography>
                  </Box>
                )}
              </Box>

              <Box>
                <ReuseableForm
                  onSubmit={hanldeLoginSubmit}
                  resolver={zodResolver(validationSchemaForLogin)}
                  defaultValues={{
                    email: "",
                    password: "",
                  }}
                >
                  <Grid container spacing={2} my={1}>
                    <Grid item md={6} xs={12}>
                      <ReuseableInput
                        name="email"
                        fullWidth={true}
                        label="Email"
                        type="email"
                      />
                    </Grid>
                    <Grid item md={6} xs={12}>
                      <ReuseableInput
                        name="password"
                        fullWidth={true}
                        label="Password"
                        type="password"
                        size="small"
                      />
                    </Grid>
                  </Grid>
                  <Typography
                    sx={{
                      marginBottom: "10px",
                    }}
                    textAlign="end"
                    component="p"
                    fontWeight={300}
                  >
                    <Link href="/">
                      <span className="text-black-100 ">
                        {" "}
                        Forget Password ?
                      </span>
                    </Link>
                  </Typography>
                  <Button
                    sx={{
                      margin: "5px 0px",
                      backgroundColor: "black",
                      color: "white",
                      "&:hover": {
                        backgroundColor: "black",
                        boxShadow: "none",
                      },
                      padding: "5px"
                    }}
                    type="submit"
                    fullWidth={true}
                  >
                    LogIn
                  </Button>
                  <Typography component="h6" color={"purple"} fontWeight={300}>
                    Don&apos;t have an account ?
                    <Link className="text-blue-500" href="/register">
                      <span> Create Account</span>
                    </Link>
                  </Typography>
                </ReuseableForm>
              </Box>
            </Box>
          </div>
        </Stack>
      </Container>
    </div>
  );
};

export default LoginPage;
