export type ContextInterface = {
  weatherData: WeatherData;
  setWeatherData: (weatherData: WeatherData) => void;
};
export interface WeatherData {
  city: CityInterface;
  cnt: number;
  cod: string;
  list: Array<ListInterface>;
  message: number;
}
export interface CityInterface {
  coord: CoordInterface;
  country: string;
  id: number;
  name: string;
  population: number;
  sunrise: number;
  sunset: number;
  timezone: number;
}

export interface CoordInterface {
  lat: number;
  lon: number;
}
export interface ListInterface {
  clouds: CloudInterFace;
  dt: number;
  dt_txt: string;
  main: MainInterface;
  pop: number;
  rain: RainInterFace;
  sys: SysInterFace;
  visibility: number;
  weather: Array<WeatherObject>;
  wind: WindInterFace;
}
export interface WeatherObject {
  id: number;
  main: string;
  description: string;
  icon: string;
}
export interface MainInterface {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  sea_level: number;
  grnd_level: number;
  humidity: number;
  temp_kf: number;
}
export interface CloudInterFace {
  all: number;
}
export interface WindInterFace {
  speed: number;
  deg: number;
  gust: number;
}
export interface RainInterFace {
  "3h": number;
}
export interface SysInterFace {
  pod: string;
}
