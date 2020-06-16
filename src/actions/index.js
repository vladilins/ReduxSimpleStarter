import axios from "axios";

export const API_KEY = "add key";
export const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = "FETCH_WEATHER";

export const fetchWeather = (city) => {
  const url = `${ROOT_URL}&q=${city}`;
  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request,
  };
};
