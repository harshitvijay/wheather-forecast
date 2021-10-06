import { FC, useEffect } from "react";
import { Box } from "@mui/system";
import WeatherCard from "../WeatherCard";
import { useWeatherData } from "../../Context";
import { useStyles } from "./style";

const WeatherCardWrapper: FC = () => {
  const classes = useStyles();
  const { weatherData, setWeatherData } = useWeatherData();
  const fetchData = async () => {
    try {
      const data = await fetch(
        "https://api.openweathermap.org/data/2.5/forecast?q=Indore&appid=f1ee0c6370a1c9875b0fd546de222926"
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
      {(weatherData.list.filter((listData, index) =>
        weatherData.list.findIndex(obj => obj.dt_txt.split(" ")[0] === listData.dt_txt.split(" ")[0]) === index))
        .map((data, index) => index < 5 ? <WeatherCard key ={index} obj = {data} city = {weatherData.city}/> : null)}
    </Box>
  );
};

export default WeatherCardWrapper;
