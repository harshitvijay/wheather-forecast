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
export const imageSrcGenerator = (icon: string): string => {
  return "https://openweathermap.org/img/wn/" + icon + "@4x.png";
};
export const urlGenerator = (name: string, date: string) => {
  return `/${name}?date=${dateTimeStringToDateString(date)}`;
};
