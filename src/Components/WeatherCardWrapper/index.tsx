import { FC, useEffect } from "react";
import Box from "@mui/system/Box";
import WeatherCard from "../WeatherCard";
import { useWeatherData } from "../../Context";
import { url } from "../../constant";
import { DataInterface } from "../WeatherCard/weatherCard.interface";
import { useStyles } from "./style";

const WeatherCardWrapper: FC = () => {
  const classes = useStyles();
  const { weatherData, setWeatherData } = useWeatherData();
  const fetchData = async () => {
    try {
      const data = await fetch(url).then((res) => res.json());
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
      {weatherData.list
        .filter(
          (listData: { dt_txt: string }, index: number) =>
            weatherData.list.findIndex(
              (obj: { dt_txt: string }) =>
                obj.dt_txt.split(" ")[0] === listData.dt_txt.split(" ")[0]
            ) === index
        )
        .map((data: DataInterface, index: number) =>
          index < 5 ? (
            <WeatherCard key={index} data={data} city={weatherData.city} />
          ) : null
        )}
    </Box>
  );
};

export default WeatherCardWrapper;
