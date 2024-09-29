// src/components/Location.tsx

import { useWeatherContext } from "../context/WeatherContext";

const Location: React.FC = () => {
    const { location} = useWeatherContext();

    return (
        <div className="location">
            <p>{location ?? "Location not available"}</p>
        </div>
    );
};

export default Location;