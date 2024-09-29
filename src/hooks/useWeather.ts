// src/hooks/useWeather.ts

    import { useQuery } from 'react-query';
    import { fetchWeather } from '../services/weatherService';
    import { translateCondition } from '../utils/translateCondition';
    
    interface SimplifiedWeather {
      temperature: number;
      condition: string;
      location: string; 
    }
    
    export const useWeather = () => {
      const { data, error, isLoading } = useQuery<SimplifiedWeather, Error>(
        'weatherData',
        async () => {
          return new Promise<SimplifiedWeather>((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(
              async (position) => {
                try {
                  const weatherData = await fetchWeather(
                    position.coords.latitude,
                    position.coords.longitude
                  );
    
                  const simplifiedWeather: SimplifiedWeather = {
                    temperature: Math.round(weatherData.main.temp),
                    condition: translateCondition(weatherData.weather[0].main),
                    location: weatherData.name, 
                  };
    
                  resolve(simplifiedWeather);
                } catch (err) {
                  reject(new Error("Unable to fetch weather data"));
                }
              },
              () => {
                reject(new Error("Geolocation is not enabled"));
              }
            );
          });
        },
        {
          staleTime: 1000 * 60 * 5, // Datan anses färsk i 5 minuter
          cacheTime: 1000 * 60 * 30, // Datan cachas i 30 minuter
          retry: false,
        }
      );
    
      return {
        weather: data,
        error: error ? error.message : null,
        loading: isLoading,
      };
    };
    