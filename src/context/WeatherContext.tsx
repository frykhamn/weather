// src/context/WeatherContext.tsx
import { createContext, useContext, ReactNode } from 'react';
import { SimplifiedWeather, useWeather } from '../hooks/useWeather';

interface WeatherContextProps {
  weather: SimplifiedWeather | null;
  loading: boolean;
  error: string | null;
}


const WeatherContext = createContext<WeatherContextProps | undefined>(undefined);

export const WeatherProvider = ({ children }: { children: ReactNode }) => {
  const { weather, error, loading } = useWeather();

  return (
    <WeatherContext.Provider value={{weather, loading, error }}>
      {children}
    </WeatherContext.Provider>
  );
};

export const useWeatherContext = () => {
  const context = useContext(WeatherContext);
  if (context === undefined) {
    throw new Error('useWeatherContext must be used within a WeatherProvider');
  }
  return context;
};
