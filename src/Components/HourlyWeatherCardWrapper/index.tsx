import { FC } from "react";
import Container from "@mui/material/Container";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import HourlyWeatherCard from "../HourlyWeatherCard";
import { useWeatherData } from "../../Context";
import { DataInterface } from "../../common.interface";
import { dateTimeStringToDateString } from "../../utils";
import { staticData } from "../../constant";
import useStyles from "./style";

const HourlyWeatherCardWrapper: FC = () => {
  const classes = useStyles();
  const data = useWeatherData();
  const date = new URLSearchParams(window.location.search).get("date");

  return (
    <Container className={classes.cardWrapper}>
      <TableContainer>
        <Table className={classes.table}>
          <TableHead className={classes.tableHeader}>
            <TableRow>
              {staticData.map((value, index) => {
                return (
                  <TableCell key={index} className={classes.tableHeaderRowCell}>
                    {value}
                  </TableCell>
                );
              })}
            </TableRow>
          </TableHead>
          <TableBody>
            {data.weatherData.list.map(
              (listItem: DataInterface, index: number) =>
                date === dateTimeStringToDateString(listItem.dt_txt) && (
                  <HourlyWeatherCard
                    key={index}
                    data={listItem}
                    city={data.weatherData.city}
                  />
                )
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default HourlyWeatherCardWrapper;
