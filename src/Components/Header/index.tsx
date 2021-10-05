import React, { FC } from "react";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useStyles } from "../../Styles";

const Header: FC = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Container className={classes.headerContainer}>
        <Typography variant="h1" component="div">
          5-Day ForeCast.
        </Typography>
      </Container>
    </React.Fragment>
  );
};

export default Header;
