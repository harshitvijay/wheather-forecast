import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

const Header = () => {
  return (
    <React.Fragment>
      <Container
        sx={{
          bgcolor: "rgb(80, 80, 80, 0.3)",
          height: "40vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="h1" component="div">
          5-Day ForeCast.
        </Typography>
      </Container>
    </React.Fragment>
  );
};

export default Header;
