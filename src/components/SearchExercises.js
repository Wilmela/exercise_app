import React, { useState, useEffect } from "react";

import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { fetchData, exerciseOptions } from "../utils/fetchData";

import HorizontalScrollbar from "./HorizontalScrollbar";

const SearchExercises = ({ setExercises, bodyPart, setBodyPart }) => {
  const [search, setSearch] = useState("");
  const [bodyParts, setBodyParts] = useState([]);

  //Fetch exercises based on body part when app launch.
  useEffect(() => {
    const fetchExercisesData = async () => {
      const bodyPartsData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
        exerciseOptions
      );

      setBodyParts(["all", ...bodyPartsData]);
    };

    fetchExercisesData();
  }, []);

  const handleSearch = async () => {
    if (search) {
      const exercisesData = await fetchData( "https://exercisedb.p.rapidapi.com/exercises", exerciseOptions );

      const searchExercises = exercisesData.filter( (exercise) =>
          exercise.name.toLowerCase().includes(search) ||
          exercise.target.toLowerCase().includes(search) ||
          exercise.equipment.toLowerCase().includes(search) ||
          exercise.bodyPart.toLowerCase().includes(search)
      );

      setSearch("");
      setExercises(searchExercises);
    }
  };
  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
      <Typography
        color="#355753"
        fontWeight="500"
        sx={{ fontSize: { lg: "44px", xs: "40px" } }}
        mb="50px"
        textAlign="center"
      >
        Find Exercises
      </Typography>
      <Box position="relative" mb="72px">
        <TextField
          height="76px"
          value={search}
          placeholder="Search exercises"
          type="text"
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          sx={{
            input: { fontWeight: "700px", border: "none", borderRadius: "4px" },
            width: { lg: "800px", xs: "300px" },
            backgroundColor: "#fff ",
          }}
        />
        <Button
          className="search-btn"
          sx={{
            backgroundColor: "#9D302F",
            color: "#fff",
            textTransform: "none",
            width: { lg: "175px", xs: "80px" },
            fontSize: { lg: "20px", xs: "14px" },
            height: " 56px",
            position: "absolute",
            right: "0",
          }}
          onClick={handleSearch}
        >
          Search
        </Button>
      </Box>
      <Box sx={{ position: "relative", width: "100%", p: "20px" }}>
        <HorizontalScrollbar
          data={bodyParts}
          bodyPart={bodyPart}
          setBodyPart={setBodyPart}
          isBodyParts
        />
      </Box>
    </Stack>
  );
};

export default SearchExercises;
