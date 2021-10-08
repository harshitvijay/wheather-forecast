import { FC } from "react";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { CityInterface, DataInterface } from "./hourlyWeatherCard.interface";
import {
  dateTimeStringToTimeString,
  tempKelvinToCelcius,
  timeStampToTimeString,
} from "../../utils";
import useStyles from "./style";

const HourlyWeatherCard: FC<{ data: DataInterface; city: CityInterface }> = ({
  data,
  city,
}) => {
  const classes = useStyles();

  return (
    <TableRow>
      <TableCell className={classes.tableBodyCell}>
        {dateTimeStringToTimeString(data.dt_txt)}
      </TableCell>
      <TableCell className={classes.tableBodyCell}>
        {timeStampToTimeString(city.sunrise)}
      </TableCell>
      <TableCell className={classes.tableBodyCell}>
        {timeStampToTimeString(city.sunset)}
      </TableCell>
      <TableCell className={classes.tableBodyCell}>
        {tempKelvinToCelcius(data.main.temp_min)}
      </TableCell>
      <TableCell className={classes.tableBodyCell}>
        {tempKelvinToCelcius(data.main.temp_max)}
      </TableCell>
      <TableCell className={classes.tableBodyCell}>{data.wind.speed}</TableCell>
    </TableRow>
  );
};

export default HourlyWeatherCard;
