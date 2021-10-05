import { FC, useEffect } from "react";
import { Box } from "@mui/system";
import WeatherCard from "../WeatherCard";
import { useWeatherData } from "../../Context";
import { useStyles } from "./style";

const WeatherCardWrapper: FC = () => {
  const classes = useStyles();
  const { setWeatherData } = useWeatherData();
  const fetchData = async () => {
    try {
      const data = await fetch(
        "https://api.openweathermap.org/data/2.5/forecast?q=Bengaluru&appid=f1ee0c6370a1c9875b0fd546de222926"
      ).then((res) => res.json());
      setWeatherData(data);
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
    <Box className={classes.weather}>
      <WeatherCard />
      <WeatherCard />
      <WeatherCard />
      <WeatherCard />
      <WeatherCard />
    </Box>
  );
};

export default WeatherCardWrapper;
