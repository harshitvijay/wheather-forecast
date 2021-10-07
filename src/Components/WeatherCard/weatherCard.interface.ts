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

export interface DataInterface {
  dt_txt: string;
  main: MainInterface;
  weather: any;
}
export interface MainInterface {
  temp: number;
}
