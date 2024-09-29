// src/components/ClothingSuggestion.tsx

import { useWeatherContext } from '../context/WeatherContext';
import { FaRegSnowflake, FaTshirt } from 'react-icons/fa';
import {
  GiWinterGloves,
  GiWinterHat,
  GiTrousers,
  GiShorts,
  GiSunglasses,
  GiFlipFlops,
  GiSun,
} from 'react-icons/gi';

export const useClothingSuggestion = (temperature: number): JSX.Element[] => {
  let icons: JSX.Element[] = [];

  if (temperature <= -10) {
    icons.push(<FaRegSnowflake key="snowflake" />, <GiWinterGloves key="gloves" />, <GiWinterHat key="hat" />, <GiTrousers key="trousers" />);
  } else if (temperature <= -5) {
    icons.push(<FaRegSnowflake key="snowflake" />, <GiWinterGloves key="gloves" />, <GiWinterHat key="hat" />, <GiTrousers key="trousers" />);
  } else if (temperature <= 0) {
    icons.push(<GiWinterGloves key="gloves" />, <GiTrousers key="trousers" />);
  } else if (temperature <= 5) {
    icons.push(<GiWinterGloves key="gloves" />, <GiTrousers key="trousers" />, <FaTshirt key="tshirt" />);
  } else if (temperature <= 10) {
    icons.push(<FaTshirt key="tshirt" />, <GiTrousers key="trousers" />);
  } else if (temperature <= 15) {
    icons.push(<FaTshirt key="tshirt" />, <GiTrousers key="trousers" />);
  } else if (temperature <= 20) {
    icons.push(<FaTshirt key="tshirt" />, <GiTrousers key="trousers" />);
  } else if (temperature <= 25) {
    icons.push(<FaTshirt key="tshirt" />, <GiShorts key="shorts" />, <GiSunglasses key="sunglasses" />);
  } else if (temperature <= 30) {
    icons.push(<FaTshirt key="tshirt" />, <GiShorts key="shorts" />, <GiSunglasses key="sunglasses" />);
  } else if (temperature <= 35) {
    icons.push(<FaTshirt key="tshirt" />, <GiShorts key="shorts" />, <GiSunglasses key="sunglasses" />, <GiFlipFlops key="flipflops" />);
  } else {
    icons.push(<GiShorts key="shorts" />, <FaTshirt key="tshirt" />, <GiSunglasses key="sunglasses" />, <GiFlipFlops key="flipflops" />, <GiSun key="sun" />);
  }

  return icons;
};
