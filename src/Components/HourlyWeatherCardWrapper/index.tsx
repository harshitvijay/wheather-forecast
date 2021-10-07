import { FC } from "react";
import Box from "@mui/system/Box";
import HourlyWeatherCard from "../HourlyWeatherCard";
import { useWeatherData } from "../../Context";
import { DataInterface } from "./hourlyWeatherCardWrapper.interface";
import useStyles from "./style";

const HourlyWeatherCardWrapper: FC = () => {
  const classes = useStyles();
  const data = useWeatherData();
  const date = new URLSearchParams(window.location.search).get("date");

  return (
    <Box className={classes.cardWrapper}>
      {data.weatherData.list.map((listItem: DataInterface, index: number) =>
        date === listItem.dt_txt.split(" ")[0] ? (
          <HourlyWeatherCard
            key={index}
            data={listItem}
            city={data.weatherData.city}
          />
        ) : null
      )}
    </Box>
  );
};

export default HourlyWeatherCardWrapper;
