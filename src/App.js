import React from "react";
import { Route, Routes } from "react-router-dom";
import { Box } from "@mui/system";

import "./App.css";

import { Navbar, Footer } from "./components/";
import Home from "./components/pages/Home";
import ExerciseDetail from "./components/pages/ExerciseDetail";

const App = () => {
  return (
    <Box width="100%" sx={{overFlow:'hidden'}}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exercise/:id" element={<ExerciseDetail />} />
      </Routes>
      <Footer />
    </Box>
  );
};

export default App;
