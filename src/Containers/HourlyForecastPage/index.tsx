import { FC } from "react";
import Header from "../../Components/Header";
import Container from "@mui/material/Container";
import HourlyWeatherCardWrapper from "src/Components/HourlyWeatherCardWrapper";

const HourlyForecastPage: FC = () => {
  return (
    <Container>
      <Header title="Hourly ForeCast." />
      <HourlyWeatherCardWrapper />
    </Container>
  );
};

export default HourlyForecastPage;
