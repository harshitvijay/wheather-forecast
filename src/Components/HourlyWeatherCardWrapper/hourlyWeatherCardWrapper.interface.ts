export interface DataInterface {
  dt: number;
  dt_txt: string;
  visibility: number;
  pop: number;
  main: MainInterface;
  clouds: CloudInterFace;
  wind: WindInterFace;
  rain: RainInterFace;
  sys: SysInterFace;
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
