// src/hooks/useClothingSuggestions.ts
import { useMemo } from "react";
import { FaUmbrella, FaTshirt, FaRegSnowflake } from "react-icons/fa"; // FontAwesome ikoner
import { GiWinterGloves, GiShorts, GiTrousers } from "react-icons/gi"; // Game Icons ikoner

export const useClothingSuggestions = (temperature: number, condition: string) => {
  const suggestions = useMemo(() => {
    const icons: JSX.Element[] = [];

    // Kläder baserade på temperaturintervall
    if (temperature < -10) {
      icons.push(<FaRegSnowflake />, <GiWinterGloves />); // Vinterkläder
    } else if (temperature < 0) {
      icons.push(<GiWinterGloves />, <FaTshirt />); // Vinterjacka och tröja
    } else if (temperature < 10) {
      icons.push(<FaTshirt />, <GiTrousers />); // Jacka och byxor
    } else if (temperature < 20) {
      icons.push(<FaTshirt />, <GiTrousers />); // T-shirt och byxor
    } else if (temperature < 30) {
      icons.push(<FaTshirt />, <GiShorts />); // T-shirt och shorts
    } else if (temperature <= 55) {
      icons.push(<GiShorts />, <FaTshirt />); // Shorts och T-shirt
    } else {
      icons.push(<FaTshirt />); // För exceptionella temperaturer
    }

    // Lägg till paraply om det regnar
    if (condition.toLowerCase().includes("rain")) {
      icons.push(<FaUmbrella />);
    }

    return icons;
  }, [temperature, condition]);

  return suggestions;
};
