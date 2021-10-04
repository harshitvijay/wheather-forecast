import { FC } from "react";
import { Box } from "@mui/material";
import WeatherCard from "../../Components/WeatherCard";
import Header from "../../Components/Header";
import Location from "../../Components/Location";
import { useStyles } from "../../Styles";

const ForecastPage: FC = () => {
  const classes = useStyles();
  return (
    <Box>
      <Header />
      <Location />
      <Box className={classes.weather}>
        <WeatherCard />
        <WeatherCard />
        <WeatherCard />
        <WeatherCard />
        <WeatherCard />
      </Box>
    </Box>
  );
};

export default ForecastPage;
