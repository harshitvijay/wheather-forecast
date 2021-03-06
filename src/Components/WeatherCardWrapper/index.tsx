import { FC } from "react";
import Box from "@mui/system/Box";
import WeatherCard from "../WeatherCard";
import { useWeatherData } from "../../Context";
import { url, citiesUrl } from "../../constant";
import { DataInterface } from "../../common.interface";
import { dateTimeStringToDateString } from "../../utils";
import { fetchCities, fetchData } from "../../services";
import useStyles from "./style";

const WeatherCardWrapper: FC = () => {
  const classes = useStyles();
  const { weatherData, setWeatherData } = useWeatherData();
  fetchData(setWeatherData, url);
  fetchCities(citiesUrl);
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
        .map(
          (data: DataInterface, index: number) =>
            index < 5 && (
              <WeatherCard key={index} data={data} city={weatherData.city} />
            )
        )}
    </Box>
  );
};

export default WeatherCardWrapper;
