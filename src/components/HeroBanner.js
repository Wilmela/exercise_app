import React from "react";
import { Box, Stack, Typography, Button } from "@mui/material";

import HeroBannerImage from "../assets/images/bbbg.jpg";

const HeroBanner = () => {
  return (
    <Box
    // sx={{ mt: { lg: "212px", xs: "70px" }, ml: { sm: "50px" } }}
    // position="relative" p="20px"
    >
      <img src={HeroBannerImage} alt="banner" className="hero-banner-img" />

      <Stack direction='column' alignItems='center' justifyContent='center'  className="headerTitle"
      sx={{padding: '4rem 0rem'}}
      >
        <Typography color="#355753" fontSize="56px" fontWeight="600" mt="20px" textAlign='center'>
          Keep Fit
        </Typography>
        <Typography  color='#769F8B' fontSize="24px" fontWeight="300" mt="20px" textAlign='center'>
          Stay In Shape!
        </Typography>

        <Button
          variant="contained"
          color="error"
          href="#exercises"
          sx={{ backgroundColor: "#9D302F", marginTop:'2rem' }}
        >
           Check Out Exercises
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
