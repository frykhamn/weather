// src/utils/translateCondition.ts

export const translateCondition = (condition: string): string => {
    const translations: { [key: string]: string } = {
      Clear: "Klart",
      Clouds: "Molnigt",
      Rain: "Regn",
      Drizzle: "Duggregn",
      Thunderstorm: "Åska",
      Snow: "Snö",
      Mist: "Dimma",
      Haze: "Dimmighet",
      Fog: "Tjock dimma",
      Dust: "Dammigt",
      Sand: "Sandstorm",
      Ash: "Vulkanaska",
      Squall: "Stormbyar",
      Tornado: "Tornado",
    };
  
    return translations[condition] || "Okänt väder";
  };
  