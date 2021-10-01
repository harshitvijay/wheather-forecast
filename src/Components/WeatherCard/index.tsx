import { useContext } from "react";
import { WeatherStateData } from "../../Context";
import cloud from "../../assest/icons/cloud.png";

import { useHistory } from "react-router-dom";

// const WeatherCard = () => {
//   const context = useContext(WeatherStateData);
//   const history = useHistory();
//   return (
//     <div
//       className="weather-div"
//       onClick={() => history.push(`/${context.city}/${context.day}`)}
//     >
//       <p className="card-heading">Friday</p>
//       <p className="card-text">March 1st, 1:00pm</p>
//       <img className="image" src={cloud} alt="cloud" />
//       <h1>35 &#8457;</h1>
//       <p>Clear Sky</p>
//     </div>
//   );
// };
// export default WeatherCard;

import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";

export default function WeatherCard() {
  const context = useContext(WeatherStateData);
  const history = useHistory();
  return (
    <Card
      sx={{
        minWidth: 250,
        marginRight: "2%",
        border: "2px solid rgb(80, 80, 80, 0.3)",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        cursor: "pointer",
      }}
      onClick={() => history.push(`/${context.city}/${context.day}`)}
    >
      <CardContent>
        <Typography variant="h4" sx={{ fontWeight: 900, mb: 2 }}>
          Friday
        </Typography>
        <Typography color="text.secondary" sx={{ marginY: 2, fontSize: 20 }}>
          March 1st, 1:00pm
        </Typography>
        <Avatar
          sx={{ width: 60, height: 60, margin: "auto", mb: 2 }}
          src={cloud}
        />
        <Typography variant="h4" sx={{ marginY: 2 }}>
          35 &#8457;
        </Typography>
        <Typography variant="body1" sx={{ marginY: 1 }}>
          Clear Sky
        </Typography>
      </CardContent>
    </Card>
  );
}
