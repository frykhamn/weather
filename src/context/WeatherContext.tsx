// src/context/WeatherContext.tsx
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useWeather } from '../hooks/useWeather';

interface WeatherContextProps {
  temperature: number | null;
  condition: string | null;
  location: string | null;
  loading: boolean;
  error: string | null;
}


const WeatherContext = createContext<WeatherContextProps | undefined>(undefined);

export const WeatherProvider = ({ children }: { children: ReactNode }) => {
  const { weather, error, loading } = useWeather();
  const [temperature, setTemperature] = useState<number | null>(null);
  const [condition, setCondition] = useState<string | null>(null);
  const [location, setLocation] = useState<string | null>(null);

  useEffect(() => {
    if (weather) {
      setTemperature(weather.temperature);
      setCondition(weather.condition);
      setLocation(weather.location); // Uppdatera plats
    }
  }, [weather]);

  return (
    <WeatherContext.Provider value={{ temperature, condition, location, loading, error }}>
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
