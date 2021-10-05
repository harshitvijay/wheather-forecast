import { FC, useEffect } from "react";
import { Box } from "@mui/material";
import WeatherCard from "../../Components/WeatherCard";
import Header from "../../Components/Header";
import Location from "../../Components/Location";
import { useStyles } from "../../Styles";

const ForecastPage: FC = () => {
  const classes = useStyles();
  const fetchData = async() => {
    try {
      const weatherData = await fetch("https://api.openweathermap.org/data/2.5/forecast?q=Bengaluru&appid=f1ee0c6370a1c9875b0fd546de222926").then((res) => res.json());
      console.log(weatherData);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
    const interval = setInterval(() => {
      fetchData();
    }, 300000);
    return () => clearInterval(interval);
  }, []);
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
