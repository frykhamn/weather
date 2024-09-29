// src/components/Location.tsx

import { useWeatherContext } from "../context/WeatherContext";
import { trimLocation } from "../utils/trimLocation";

const Location: React.FC = () => {
  const { location } = useWeatherContext();

  const trimmedLocation = location ? trimLocation(location) : 'Plats skanas';


  return (
    <div className="location">
      <p>{trimmedLocation}</p>
    </div>
  );
};

export default Location;
