import { FC } from "react";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useStyles } from "./style";

const Header: FC = () => {
  const classes = useStyles();

  return (
    <Container className={classes.headerContainer}>
      <Typography variant="h1" component="div">
        5-Day ForeCast.
      </Typography>
    </Container>
  );
};

export default Header;
