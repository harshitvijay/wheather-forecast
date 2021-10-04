import { FC, useContext } from "react";
import { useHistory } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { WeatherStateData } from "../../Context";
import cloud from "../../assest/icons/cloud.png";
import { useStyles } from "../../Styles";
import {
  DayStyledComponent,
  DateStyledComponent,
  AvatarStyledComponent,
  TemperaturStyledComponent,
  CaptionStyledComponent,
} from "./styles";

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
        <DayStyledComponent variant="h4">Friday</DayStyledComponent>
        <DateStyledComponent>March 1st, 1:00pm</DateStyledComponent>
        <AvatarStyledComponent src={cloud} />
        <TemperaturStyledComponent variant="h4">
          35 &#8457;
        </TemperaturStyledComponent>
        <CaptionStyledComponent variant="body1">
          Clear Sky
        </CaptionStyledComponent>
      </CardContent>
    </Card>
  );
};

export default WeatherCard;
