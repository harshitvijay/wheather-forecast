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
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
