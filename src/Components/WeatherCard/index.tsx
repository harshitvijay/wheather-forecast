import { FC } from "react";
import { useHistory } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import { CityInterface, DataInterface } from "../../common.interface";
import {
  dateToLocalDay,
  tempKelvinToCelcius,
  imageSrcGenerator,
  urlGenerator,
} from "../../utils";
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
      onClick={() => history.push(urlGenerator(city.name, data.dt_txt))}
    >
      <CardContent>
        <Typography variant="h4" className={classes.dayStyles}>
          {dateToLocalDay(data.dt_txt)}
        </Typography>
        <Typography className={classes.dateStyles}>{data.dt_txt}</Typography>
        <Avatar
          src={imageSrcGenerator(data.weather[0].icon)}
          className={classes.avatarStyles}
        />
        <Typography variant="h4" className={classes.temperatureStyles}>
          {tempKelvinToCelcius(data.main.temp)} &#8451;
        </Typography>
        <Typography variant="body1" className={classes.captionStyles}>
          {data.weather[0].description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default WeatherCard;
