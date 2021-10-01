import React from "react";
import { ContextInterface } from "./context.interface";

export const WeatherStateData = React.createContext<ContextInterface>({
  country: "Japan",
  city: "Tokyo",
  time: "1:00PM",
  day: "Friday",
  date: "22-04-2021",
  avatar: "",
  temperature: "22 F",
  caption: "clear sky",
});
