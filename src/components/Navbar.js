import React from "react";
import { Link } from "react-router-dom";
import { Stack, Typography } from "@mui/material";

const Navbar = () => {
  return (
    <Stack
      direction="row"
      gap="40px"
      justifyContent="flex-start"
      alignItems="center"
      width="100%"
      height="50px"
      py=".5rem"
      px="1rem"
      className="navbar"
    >
      <Link to="/" style={{ textDecoration: "none", color: "#50A39B" }}>
        <Typography fontSize='34px' className='logo'>Keep-Fit</Typography>
      </Link>

      <Stack direction="row" gap="40px" fontSize="24px" alignItems="center">
        <Link
          to="/"
          style={{
            textDecoration: "none",
            color: "#3A1212",
            borderBottom: "3px solid #9D302F",
          }}
        >
          Home
        </Link>

        <a
          href="#exercises"
          style={{ textDecoration: "none", color: "#3A1212" }}
        >
          Exercises
        </a>
      </Stack>
    </Stack>
  );
};

export default Navbar;
