// src/hooks/useWeather.ts

import { useQuery } from 'react-query';
import { fetchWeather } from '../services/weatherService';
import { translateCondition } from '../utils/translateCondition';

export interface SimplifiedWeather {
  temperature: number;
  condition: string;
  location: string; 
}

const getCurrentPosition = (): Promise<GeolocationPosition> =>
  new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });

export const useWeather = () => {
  const fetchWeatherData = async (): Promise<SimplifiedWeather> => {
    try {
      const position = await getCurrentPosition();
      const weatherData = await fetchWeather(
        position.coords.latitude,
        position.coords.longitude
      );

      return {
        temperature: Math.round(weatherData.main.temp),
        condition: translateCondition(weatherData.weather[0].main),
        location: weatherData.name,
      };
    } catch (error: any) {
      if (error.code === error.PERMISSION_DENIED) {
        throw new Error("Geolocation permission denied");
      } else if (error.code === error.POSITION_UNAVAILABLE) {
        throw new Error("Position unavailable");
      } else if (error.code === error.TIMEOUT) {
        throw new Error("Geolocation request timed out");
      } else {
        throw new Error(error.message || "Unable to fetch weather data");
      }
    }
  };

  const { data, error, isLoading } = useQuery<SimplifiedWeather, Error>(
    'weatherData',
    fetchWeatherData,
    {
      staleTime: 1000 * 60 * 5,
      cacheTime: 1000 * 60 * 30,
      retry: false,
    }
  );
  //console.log(data)

  return {
    weather: data ?? null,
    error: error ? error.message : null,
    loading: isLoading,
  };
};
