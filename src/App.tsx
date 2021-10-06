import { FC, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ForecastPage from "./Containers/ForecastPage";
import HourlyForecastPage from "./Containers/HourlyForecastPage";
import { WeatherStateData, useWeatherData } from "./Context";
import "./App.css";

const App: FC = () => {
  const data = useWeatherData();
  const [weatherData, setWeatherData] = useState(data.weatherData);

  return (
    <WeatherStateData.Provider value={{ weatherData, setWeatherData }}>
      <Router>
        <Switch>
          <Route exact path="/">
            <ForecastPage />
          </Route>
          <Route
            path={`/${weatherData.city.name}`}
            component={HourlyForecastPage}
          ></Route>
        </Switch>
      </Router>
    </WeatherStateData.Provider>
  );
};

export default App;
