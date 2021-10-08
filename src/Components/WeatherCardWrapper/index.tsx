import { FC, useEffect } from "react";
import Box from "@mui/system/Box";
import WeatherCard from "../WeatherCard";
import { useWeatherData } from "../../Context";
import { url } from "../../constant";
import { DataInterface } from "../WeatherCard/weatherCard.interface";
import { dateTimeStringToDateString, fetchData } from "../../utils";
import useStyles from "./style";

const WeatherCardWrapper: FC = () => {
  const classes = useStyles();
  const { weatherData, setWeatherData } = useWeatherData();
  useEffect(() => {
    fetchData(setWeatherData, url);
    const interval = setInterval(() => {
      fetchData(setWeatherData, url);
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
                dateTimeStringToDateString(obj.dt_txt) ===
                dateTimeStringToDateString(listData.dt_txt)
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
