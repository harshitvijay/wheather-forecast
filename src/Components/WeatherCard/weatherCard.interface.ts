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
