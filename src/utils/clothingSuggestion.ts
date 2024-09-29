// src/utils/clothingSuggestion.ts
export const getClothingSuggestion = (temperature: number): string => {
    if (temperature > 25) {
      return 'Shorts and T-shirt';
    } else if (temperature > 15) {
      return 'Light jacket';
    } else if (temperature > 5) {
      return 'Warm jacket';
    } else {
      return 'Heavy coat, scarf, and gloves';
    }
  };
  