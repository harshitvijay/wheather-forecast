import { FC } from "react";
import Header from "../../Components/Header";
import { Container } from "@mui/material";
import HourlyWeatherCard from "../../Components/HourlyWeatherCard";

const HourlyForecastPage: FC = () => {
  return (
    <Container>
      <Header title="Hourly ForeCast." />
      <HourlyWeatherCard />
    </Container>
  );
};

export default HourlyForecastPage;
