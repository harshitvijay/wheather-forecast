import React, { FC } from "react";
import Typography from "@mui/material/Typography";
import HeaderContainer from "./styles";

const Header: FC = () => {
  return (
    <React.Fragment>
      <HeaderContainer>
        <Typography variant="h1" component="div">
          5-Day ForeCast.
        </Typography>
      </HeaderContainer>
    </React.Fragment>
  );
};

export default Header;
