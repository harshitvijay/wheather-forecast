import { FC, useState } from "react";
import ForecastPage from "./Containers/ForecastPage";
import { WeatherStateData, useWeatherData } from "./Context";
import "./App.css";

const App: FC = () => {
  const data = useWeatherData();
  const [weatherData, setWeatherData] = useState(data.weatherData);

  return (
    <WeatherStateData.Provider value={{ weatherData, setWeatherData }}>
      <ForecastPage />
    </WeatherStateData.Provider>
  );
};

export default App;
