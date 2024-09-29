import { useWeatherContext } from '../context/WeatherContext';
import { useClothingSuggestion } from '../hooks/useClothingSuggestion';


const ClothingSuggestion: React.FC = () => {
    const { weather } = useWeatherContext();
    const { temperature, condition } = weather ?? {};
    const suggestions = useClothingSuggestion(temperature ?? 0);


  if (temperature === null || condition === null) {
    return <p>Klädförslag ej tillgängligt</p>;
  }

    return (
            <div className='clothes'>
                {suggestions.map((icon, index) => (
                    <span key={index}>
                        {icon}
                    </span>
                ))}
            </div>
    );
};

export default ClothingSuggestion;