import "./App.css";
import ForecastPage from "./Containers/ForecastPage";
import HourlyForeCastPage from "./Containers/HourlyForeCastPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { WeatherStateData } from "./Context";

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

function App() {
  return (
    <WeatherStateData.Provider value={data}>
      <Router>
        <Switch>
          <Route exact path="/" component={ForecastPage} />
          <Route
            path={`${data.city}/${data.day}`}
            component={HourlyForeCastPage}
          ></Route>
        </Switch>
      </Router>
    </WeatherStateData.Provider>
  );
}

export default App;
