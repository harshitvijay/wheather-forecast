import { CityInterface, DataInterface } from "../common.interface";
export type ContextInterface = {
  weatherData: WeatherData;
  setWeatherData: (weatherData: WeatherData) => void;
};
export interface WeatherData {
  city: CityInterface;
  cnt: number;
  cod: string;
  list: Array<DataInterface>;
  message: number;
}
