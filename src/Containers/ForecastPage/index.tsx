import { FC } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "../../Components/Header";
import Location from "../../Components/Location";
import WeatherCardWrapper from "../../Components/WeatherCardWrapper";
import HourlyWeatherCardWrapper from "../../Components/HourlyWeatherCardWrapper";
import RoutesComponentWrapper from "../../Components/RoutesComponentWrapper";
import { useWeatherData } from "../../Context";

const ForecastPage: FC = () => {
  const { weatherData } = useWeatherData();

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <RoutesComponentWrapper
            child1={<Header title="5-Day Forecast." />}
            child2={<Location />}
            child3={<WeatherCardWrapper />}
          />
        </Route>
        <Route path={`/${weatherData.city.name}`}>
          <Header title="Hourly Forecast." />
          <HourlyWeatherCardWrapper />
        </Route>
      </Switch>
    </Router>
  );
};

export default ForecastPage;

//  <Container>
//       <Header title="5-Day Forecast." />
//       <Location />
//       <WeatherCardWrapper />
//     </Container>
//   ) : (
//     <Container>
//       <Header title="Hourly Forecast." />
//       <HourlyWeatherCardWrapper />
//     </Container>
