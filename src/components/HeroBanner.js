import React from "react";
import { Box, Stack, Typography, Button } from "@mui/material";

import HeroBannerImage from "../assets/images/bbbg.jpg";

const HeroBanner = () => {
  return (
    <Box
    >
      <img src={HeroBannerImage} alt="banner" className="hero-banner-img" />

      <Stack direction='column' alignItems='center' justifyContent='center'  className="headerTitle"
      sx={{padding: '4rem 0rem'}}
      >
        <Typography color="#355753" fontWeight="600" mt="20px" textAlign='center' sx={{fontSize: {md: '50px', xs: '40px'}}}>

         KEEP FIT & <br/>
         EXPERIENCE THE BETTER SIDE OF LIFE!
        </Typography>
        <Button
          variant="contained"
          color="error"
          href="#exercises"
          sx={{ backgroundColor: "#9D302F", marginTop:'2rem', height:'70px' }}
        >
           Explore Some Exercises
        </Button>
      </Stack>

      <Typography
        fontWeight={600}
        color="#ff2625"
        sx={{ opacity: 0.1, display: { lg: "block", xs: "none" } }}
        fontSize={150}
        textAlign="center"
      >
        Keep Fit
      </Typography>
    </Box>
  );
};

export default HeroBanner;
