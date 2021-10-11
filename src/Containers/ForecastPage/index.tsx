import { FC } from "react";
import Container from "@mui/material/Container";
import Header from "../../Components/Header";
import Location from "../../Components/Location";
import WeatherCardWrapper from "../../Components/WeatherCardWrapper";
import HourlyWeatherCardWrapper from "../../Components/HourlyWeatherCardWrapper";

const ForecastPage: FC = () => {
  return window.location.href === "http://localhost:3000/" ? (
    <Container>
      <Header title="5-Day Forecast." />
      <Location />
      <WeatherCardWrapper />
    </Container>
  ) : (
    <Container>
      <Header title="Hourly Forecast." />
      <HourlyWeatherCardWrapper />
    </Container>
  );
};

export default ForecastPage;
