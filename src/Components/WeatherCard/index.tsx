import { FC } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import { useHistory } from "react-router-dom";
import { CityInterface, DataInterface } from "./weatherCard.interface";
import { dateToLocalDay } from "../../utils";
import useStyles from "./style";

const WeatherCard: FC<{ data: DataInterface; city: CityInterface }> = ({
  data,
  city,
}) => {
  const history = useHistory();
  const classes = useStyles();

  return (
    <Card
      className={classes.weatherCard}
      onClick={() =>
        history.push(`/${city.name}?date=${data.dt_txt.split(" ")[0]}`)
      }
    >
      <CardContent>
        <Typography variant="h4" className={classes.dayStyles}>
          {dateToLocalDay(data.dt_txt)}
        </Typography>
        <Typography className={classes.dateStyles}>{data.dt_txt}</Typography>
        <Avatar
          src={
            "https://openweathermap.org/img/wn/" +
            data.weather[0].icon +
            "@4x.png"
          }
          className={classes.avatarStyles}
        />
        <Typography variant="h4" className={classes.temperatureStyles}>
          {Math.floor(data.main.temp - 273.15)} &#8451;
        </Typography>
        <Typography variant="body1" className={classes.captionStyles}>
          {data.weather[0].description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default WeatherCard;
