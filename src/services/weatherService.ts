// src/services/weatherService.ts
import axios from "axios";

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

export interface WeatherResponse {
  main: {
    temp: number;
  };
  weather: {
    description: string;
  }[];
  name: string;
}

export const fetchWeather = async (
  latitude: number,
  longitude: number
): Promise<WeatherResponse> => {
  if (!API_KEY) {
    throw new Error("Weather API key is missing");
  }
  try {
    const response = await axios.get<WeatherResponse>(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching weather data:", error);
    throw new Error("Failed to fetch weather data");
  }
};
