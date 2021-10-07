import { FC } from "react";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import useStyles from "./style";
import { CityInterface, DataInterface } from "./hourlyWeatherCard.interface";

const HourlyWeatherCard: FC<{ data: DataInterface; city: CityInterface }> = ({
  data,
  city,
}) => {
  const classes = useStyles();
  console.log(data, city);

  return (
    <Card className={classes.card}>
      <Typography>Current Time: {data.dt_txt.split(" ")[1]}</Typography>
      <Typography>
        Sunrise: {new Date(city.sunrise * 1000).toTimeString().split(" ")[0]}
      </Typography>
      <Typography>
        Sunset: {new Date(city.sunset * 1000).toTimeString().split(" ")[0]}
      </Typography>
      <Typography>
        Min temp: {Math.floor(data.main.temp_min - 273.15)} &#8451;
      </Typography>
      <Typography>
        Max Temp: {Math.floor(data.main.temp_max - 273.15)} &#8451;
      </Typography>
      <Typography>Wind Speed: {data.wind.speed} km/h</Typography>
    </Card>
  );
};

export default HourlyWeatherCard;
