import WeatherCard from "../../Components/WeatherCard";
import Header from "../../Components/Header";
import Location from "../../Components/Location";

const ForecastPage = () => {
  return (
    <div>
      <Header />
      <Location />
      <div className="weather">
        <WeatherCard />
        <WeatherCard />
        <WeatherCard />
        <WeatherCard />
        <WeatherCard />
      </div>
    </div>
  );
};

export default ForecastPage;
