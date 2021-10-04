import { FC, useContext } from "react";
import { useHistory } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import { WeatherStateData } from "../../Context";
import cloud from "../../assest/icons/cloud.png";
import { useStyles } from "../../Styles";

const WeatherCard: FC = () => {
  const context = useContext(WeatherStateData);
  const history = useHistory();
  const classes = useStyles();
  return (
    <Card
      className={classes.weatherCard}
      onClick={() => history.push(`/${context.city}/?day=${context.day}`)}
    >
      <CardContent>
        <Typography variant="h4" className={classes.dayStyles}>Friday</Typography>
        <Typography className={classes.dateStyles}>March 1st, 1:00pm</Typography>
        <Avatar src={cloud} className={classes.avatarStyles}/>
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
