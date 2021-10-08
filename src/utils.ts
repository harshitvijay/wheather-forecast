export const dateToLocalDay = (date: string): string => {
  return new Intl.DateTimeFormat("en-IN", { weekday: "long" }).format(
    new Date(date)
  );
};

export const tempKelvinToCelcius = (temp: number): number => {
  return Math.floor(temp - 273.15);
};

export const timeStampToTimeString = (timeStamp: number): string => {
  return new Date(timeStamp * 1000).toTimeString().split(" ")[0];
};

export const dateTimeStringToTimeString = (dateTime: string): string => {
  return dateTime.split(" ")[1];
};
export const dateTimeStringToDateString = (dateTime: string): string => {
  return dateTime.split(" ")[0];
};

export const fetchData = async (setWeatherData: Function, url: string) => {
  try {
    const data = await fetch(url).then((res) => res.json());
    setWeatherData(data);
  } catch (error) {
    console.log(error);
  }
};

export const fetchCities = async (url: string) => {
  try {
    const cities = await fetch(url).then((res) => res.json());
    return cities.data;
  } catch (error) {
    console.log(error);
  }
};
