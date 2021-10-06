/* eslint-disable quotes */
import { FC } from "react";
import { useHistory } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import { dateToLocalDay } from "../../constant";
import { useStyles } from "./style";

const WeatherCard: FC<{obj:any, city:any}> = ({ obj, city }) => {
  const history = useHistory();
  const classes = useStyles();
  return (
    <Card
      className={classes.weatherCard}
      onClick={() =>
        history.push(
          `/${city.name}/?day=${dateToLocalDay(obj.dt_txt)}`
        )
      }
    >
      <CardContent>
        <Typography variant="h4" className={classes.dayStyles}>
         {dateToLocalDay(obj.dt_txt)}
        </Typography>
        <Typography className={classes.dateStyles}>
          {obj.dt_txt}
        </Typography>
        <Avatar src={"https://openweathermap.org/img/wn/" + obj.weather[0].icon + "@2x.png"} className={classes.avatarStyles} />
        <Typography variant="h4" className={classes.temperatureStyles}>
          {Math.floor(obj.main.temp - 273.15)} &#8451;
        </Typography>
        <Typography variant="body1" className={classes.captionStyles}>
          {obj.weather[0].description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default WeatherCard;
