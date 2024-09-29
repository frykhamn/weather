// src/components/WeatherDisplay.tsx
import { useWeatherContext } from "../context/WeatherContext";

const WeatherDisplay = () => {
  const { temperature, condition } = useWeatherContext();

  return (
    <div className="card-wrapper">
      <div className="card">
        <p className="title">Idag är det: </p>
        <p className="subtitle">
          {temperature !== null ? `${temperature}°C` : "Temperatur ej tillgänglig"}
        </p>
      </div>
      <div className="card">
        <p className="title">Förhållande: </p>
        <p className="subtitle">
          {condition ?? "Förhållande ej tillgängligt"}
        </p>
      </div>
    </div>
  );
};

export default WeatherDisplay;
