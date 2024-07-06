"use client";
import ReuseableForm from "@/components/Forms/ReuseableForm";
import ReuseableInput from "@/components/Forms/ReuseableInput";
import { zodResolver } from "@hookform/resolvers/zod";
import { Box, Button, Grid, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { FieldValues } from "react-hook-form";
import axios from "axios";
import { toast } from "sonner";
import { z } from "zod";


//Zod Validation
const lostItemValidationSchema = z.object({
  title: z.string().min(1, "Titel Required !"),
  des: z.string().min(1, "Description is Required !"),
  img: z.string().min(1, "Image Url is Required !"),
  link: z.string().min(1, "Github Profile Url is Required !"),
  githubClientLink: z.string().min(1, "github Client URL is Required !"),
  githubServerLink: z.string().min(1, "github Server URL is Required !"),
  liveSite: z.string().min(1, "Live Site Url is Required !"),
});


const ProjectPage = () => {
  const router = useRouter();
  const [error, setError] = useState("");

  //submit Handaller
  const registerHandleSubmit = async (values: FieldValues) => {
    // console.log(values)
    try {
      const response = await axios.post(
        "https://prothfolio-backend.vercel.app/api/v1/project/create-project",
        values
      );
      if (response.data.success){
        toast.success("Projects added Successfully ")
      } 
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const defaultValues = {
    title: "",
    des: "",
    img: "",
    link: "",
    githubClientLink: "",
    githubServerLink: "",
    liveSite: "",
  };

  return (
    <div className="   ">
      <h1 className="text-3xl font-bold text-center  px-20">Add Projects </h1>

      <div className="px-20">
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
            onSubmit={registerHandleSubmit}
            resolver={zodResolver(lostItemValidationSchema)}
            defaultValues={defaultValues}
          >
            <Grid container spacing={2} my={1}>
              <Grid item md={6} xs={12}>
                <ReuseableInput
                  name="title"
                  fullWidth={true}
                  label="Title"
                  type="text"
                  size="small"
                />
              </Grid>

              <Grid item md={6} xs={12}>
                <ReuseableInput
                  name="des"
                  fullWidth={true}
                  label="Description "
                  type="text"
                  size="small"
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <ReuseableInput
                  name="img"
                  fullWidth={true}
                  label="Image URL"
                  type="text"
                  size="small"
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <ReuseableInput
                  name="link"
                  fullWidth={true}
                  label="Main Github URL"
                  type="text"
                  size="small"
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <ReuseableInput
                  name="githubClientLink"
                  fullWidth={true}
                  label="Github Client URL"
                  type="text"
                  size="small"
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <ReuseableInput
                  name="githubServerLink"
                  fullWidth={true}
                  label="Github Server URL"
                  type="text"
                  size="small"
                />
              </Grid>
              <Grid item md={6} xs={12}>
                <ReuseableInput
                  name="liveSite"
                  fullWidth={true}
                  label=" Deploy Website Live URL"
                  type="text"
                  size="small"
                />
              </Grid>
            </Grid>
            <Button
              sx={{
                margin: "10px 0px",
                padding: "10px 18px",
                backgroundColor: "#CBACF9",
                color: "black",
              }}
              type="submit"
            >
              Submit
            </Button>
          </ReuseableForm>
        </Box>
      </div>
    </div>
  );
};

export default ProjectPage;
