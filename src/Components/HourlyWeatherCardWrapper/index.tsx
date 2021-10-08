import { FC } from "react";
import Box from "@mui/system/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import HourlyWeatherCard from "../HourlyWeatherCard";
import { useWeatherData } from "../../Context";
import { DataInterface } from "./hourlyWeatherCardWrapper.interface";
import { dateTimeStringToDateString } from "../../utils";
import useStyles from "./style";

const HourlyWeatherCardWrapper: FC = () => {
  const classes = useStyles();
  const data = useWeatherData();
  const date = new URLSearchParams(window.location.search).get("date");

  return (
    <Box className={classes.cardWrapper}>
      <TableContainer>
        <Table className={classes.table}>
          <TableHead className={classes.tableHeader}>
            <TableRow>
              <TableCell className={classes.tableHeaderRowCell}>Time</TableCell>
              <TableCell className={classes.tableHeaderRowCell}>
                Sunrise
              </TableCell>
              <TableCell className={classes.tableHeaderRowCell}>
                Sunset
              </TableCell>
              <TableCell className={classes.tableHeaderRowCell}>
                Min Temp (&#8451;)
              </TableCell>
              <TableCell className={classes.tableHeaderRowCell}>
                Max Temp (&#8451;)
              </TableCell>
              <TableCell className={classes.tableHeaderRowCell}>
                Wind speed (km/h)
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.weatherData.list.map(
              (listItem: DataInterface, index: number) =>
                date === dateTimeStringToDateString(listItem.dt_txt) ? (
                  <HourlyWeatherCard
                    key={index}
                    data={listItem}
                    city={data.weatherData.city}
                  />
                ) : null
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default HourlyWeatherCardWrapper;
