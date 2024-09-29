import { ClipLoader } from "react-spinners";
import { useWeatherContext } from "../context/WeatherContext";
import ClothingSuggestion from "./ClothingSuggestion";
import Location from "./Location";
import WeatherDisplay from "./WeeatherDisplay";

export const Main = () => {
  const { loading, error } = useWeatherContext();

  if (loading) {
    return (
      <div className="loading-container">
        <ClipLoader color="#00BFFF" loading={loading} size={50} />
      </div>
    );
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (location) {
    return (
      <main>
        <section>
          <Location />
        </section>
        <section>
          <ClothingSuggestion />
        </section>
        <section>
          <WeatherDisplay />
        </section>
      </main>
    );
  }
};
