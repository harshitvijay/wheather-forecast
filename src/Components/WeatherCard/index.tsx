import { FC } from "react";
import { useHistory } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import { useWeatherData } from "../../Context";
import cloud from "../../assest/icons/cloud.png";
import { dateToLocalDay } from "../../constant";
import { useStyles } from "./style";

const WeatherCard: FC = () => {
  const data = useWeatherData();
  const history = useHistory();
  const classes = useStyles();
  console.log(dateToLocalDay("2021-10-05 15:00:00"));

  return (
    <Card
      className={classes.weatherCard}
      onClick={() =>
        history.push(
          `/${data.weatherData.city.name}/?day=${data.weatherData.city.country}`
        )
      }
    >
      <CardContent>
        <Typography variant="h4" className={classes.dayStyles}>
          Friday
        </Typography>
        <Typography className={classes.dateStyles}>
          March 1st, 1:00pm
        </Typography>
        <Avatar src={cloud} className={classes.avatarStyles} />
        <Typography variant="h4" className={classes.temperatureStyles}>
          35 &#8457;
        </Typography>
        <Typography variant="body1" className={classes.captionStyles}>
          Clear Sky
        </Typography>
      </CardContent>
    </Card>
  );
};

export default WeatherCard;
