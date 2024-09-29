import { useWeatherContext } from '../context/WeatherContext';
import { useClothingSuggestions } from '../hooks/useClothingSuggestion';


const ClothingSuggestion: React.FC = () => {
    const { temperature, condition } = useWeatherContext();
    const validTemperature = temperature ?? 0;
    const validCondition = condition ?? '';
    const suggestions = useClothingSuggestions(validTemperature, validCondition);

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