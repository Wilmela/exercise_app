import React from "react";
import { Box, Stack, Typography } from "@mui/material";

import Logo from "../assets/images/Logo-1.png";

const Footer = () => {
  return (
    <Box
      borderColor="primary"
      bgColor="primary"
      width="100%"
      display="flex"
      justifyContent="center"
      alignItems="center"
      px="1rem"
      py='2rem'
    >
      <Typography variant="h5">Made with ❤️ by Mela</Typography>
    </Box>
  );
};

export default Footer;
