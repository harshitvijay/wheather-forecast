import { FC } from "react";
import { useWeatherData } from "../../Context";

const HourlyWeatherCard: FC = () => {
  const data = useWeatherData();
  const date = new URLSearchParams(window.location.search).get("date");
  console.log(date);
  console.log(data);

  return <div></div>;
};

export default HourlyWeatherCard;
