import { FC } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ForecastPage from "./Containers/ForecastPage";
import HourlyForecastPage from "./Containers/HourlyForecastPage";
import { WeatherStateData } from "./Context";
import "./App.css";

const data = {
  country: "Japan",
  city: "Tokyo",
  time: "1:00PM",
  day: "Friday",
  date: "22/04/2021",
  avatar: "",
  temperature: "22 F",
  caption: "clear sky",
};

const App:FC = () => {
  return (
    <WeatherStateData.Provider value={data}>
      <Router>
        <Switch>
          <Route exact path="/" component={ForecastPage} />
          <Route
            path={`${data.city}/?day=${data.day}`}
            component={HourlyForecastPage}
          ></Route>
        </Switch>
      </Router>
    </WeatherStateData.Provider>
  );
};

export default App;
