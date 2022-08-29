import React from "react";
import { Box, Typography } from "@mui/material";


const Footer = () => {
  return (
    <Box
      borderColor="primary"
      bgColor="primary"
      color="#355753"
      width="100%"
      display="flex"
      justifyContent="center"
      alignItems="center"
      px="1rem"
      py="2rem"
    >
      <Typography variant="h5">Made with ❤️ by Mela</Typography>
    </Box>
  );
};

export default Footer;
