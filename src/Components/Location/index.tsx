import { FC, useContext } from "react";
import { Typography } from "@mui/material";
import { WeatherStateData } from "../../Context";
import { useStyles } from "../../Styles";

const Location: FC = () => {
  // https://api.openweathermap.org/data/2.5/forecast?q=Bengaluru&appid=f1ee0c6370a1c9875b0fd546de222926
  const context = useContext(WeatherStateData);
  const classes = useStyles();
  return (
    <Typography variant="body1" component="div" className={classes.text}>
      {context.city}, {context.country}
    </Typography>
  );
};
export default Location;
