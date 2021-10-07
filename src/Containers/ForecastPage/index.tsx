import { FC } from "react";
import Box from "@mui/material/Box";
import Header from "../../Components/Header";
import Location from "../../Components/Location";
import WeatherCardWrapper from "../../Components/WeatherCardWrapper";

const ForecastPage: FC = () => {
  return (
    <Box>
      <Header title="5-Day ForeCast." />
      <Location />
      <WeatherCardWrapper />
    </Box>
  );
};

export default ForecastPage;
