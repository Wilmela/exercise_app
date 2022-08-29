import React from "react";
import { Link } from "react-router-dom";
import { Stack, Typography } from "@mui/material";

const Navbar = () => {
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      width="100%"
      height="50px"
      py=".5rem"
      px="2rem"
      className="navbar"
    >
      <Link to="/" style={{ textDecoration: "none", color: "#50A39B" }}>
        <Typography fontSize='34px' className='logo'>Keep-Fit</Typography>
      </Link>

      <Stack direction="row" gap="30px" fontSize="24px" alignItems="center">
        <Link
          to="/"
          style={{
            textDecoration: "none",
            color: "#3A1212",
          }}
        >
          home
        </Link>

        <a
          href="#exercises"
          style={{ textDecoration: "none", color: "#3A1212" }}
        >
          exercises
        </a>
      </Stack>
    </Stack>
  );
};

export default Navbar;
