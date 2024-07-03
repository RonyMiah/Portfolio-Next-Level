"use client";
import ReuseableForm from "@/components/Forms/ReuseableForm";
import ReuseableInput from "@/components/Forms/ReuseableInput";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Box,
  Button,
  Container,
  Grid,
  Pagination,
  Stack,
  Typography,
} from "@mui/material";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import axios from "axios";



const AddSkills = () => {
  const router = useRouter();
  const [error, setError] = useState("");

  //submit Handaller
  const registerHandleSubmit = async (values: FieldValues) => {
    if (values.title.trim() === "") {
      toast.error("  title is required !!");
      return;
    }


    if (values.description.trim() === "") {
      toast.error("Description content is required !!");
      return;
    }

    //submit the form one server

    try {
      const response = await axios.post(
        "http://localhost:8000/api/v1/skill/create-skill",
        values
      );
      if (response.data.success) {
        toast.success("Skill Created Successfully ");
        values.title= ""
        values.description= ""
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

 

  return (
    <div className="   ">
      <h1 className="text-3xl font-bold text-center  px-20">Add Skills </h1>

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
          <ReuseableForm onSubmit={registerHandleSubmit}>
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
                  name="description"
                  fullWidth={true}
                  label="Description "
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

export default AddSkills;
