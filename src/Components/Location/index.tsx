import { FC } from "react";
import Typography from "@mui/material/Typography";
import { useWeatherData } from "../../Context";
import useStyles from "./style";

const Location: FC = () => {
  const classes = useStyles();
  const data = useWeatherData();

  return (
    <Typography variant="body1" component="div" className={classes.text}>
      {data.weatherData.city.name}, {data.weatherData.city.country}
    </Typography>
  );
};

export default Location;
