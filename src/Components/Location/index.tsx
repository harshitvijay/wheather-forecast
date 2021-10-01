import { useContext } from "react";
import { WeatherStateData } from "../../Context";

const Location = () => {
  // http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=f1ee0c6370a1c9875b0fd546de222926
  const context = useContext(WeatherStateData);
  return (
    <p className="text">
      {context.city}, {context.country}
    </p>
  );
};
export default Location;
