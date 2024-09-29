# Väderapplikation med Klädförslag

En React-baserad webbapplikation som hämtar aktuell väderinformation baserat på användarens geografiska position och ger klädförslag anpassade efter temperaturen och väderförhållandena.

## Funktionalitet

- **Geolokalisering**: Applikationen använder webbläsarens geolokaliseringsfunktion för att hämta användarens nuvarande position.
- **Väderdata**: Hämtar aktuell temperatur, väderförhållanden och platsnamn från OpenWeatherMap API.
- **Klädförslag**: Baserat på temperaturen och väderförhållandena ger applikationen förslag på lämpliga kläder.
- **Laddningsindikator**: Visar en laddningsspinner medan data hämtas för att förbättra användarupplevelsen.
- **Felhantering**: Hanterar situationer där geolokalisering inte är aktiverad eller väderdata inte kan hämtas, och visar relevanta felmeddelanden.

## Använda Tekniker

- **React**: För att bygga användargränssnittet.
- **TypeScript**: För typkontroll och förbättrad kodkvalitet.
- **React Hooks**: För hantering av komponenttillstånd och livscykler.
- **Context API**: För global tillståndshantering av väderdata.
- **React Query**: För hämtning av data och hantering av caching.
- **Geolocation API**: För att hämta användarens geografiska position.
- **OpenWeatherMap API**: För att hämta aktuell väderinformation.
- **Axios**: För att göra HTTP-anrop till väder-API:et.
- **CSS**: För styling av applikationen.


## Installation och Körning Lokalt

### Förutsättningar

- **Node.js** (version 14 eller senare)
- **npm** (version 6 eller senare) eller **yarn**

### Steg för Installation

1. **Klona repositoriet**

   ```bash
   git clone https://github.com/ditt-användarnamn/ditt-repositorium.git
   ```

2. **Navigera till projektmappen**

   ```bash
   cd ditt-repositorium
   ```

3. **Installera beroenden**

   Med npm:

   ```bash
   npm install
   ```

   Eller med yarn:

   ```bash
   yarn install
   ```

4. **Skapa en `.env`-fil**

   Skapa en fil med namnet `.env` i projektets rotkatalog och lägg till din OpenWeatherMap API-nyckel:

   ```
   REACT_APP_WEATHER_API_KEY=din_openweathermap_api_nyckel
   ```

   *Obs:* Du kan registrera dig för en gratis API-nyckel på [OpenWeatherMap](https://openweathermap.org/api).

### Kör Applikationen Lokalt

Starta utvecklingsservern:

Med npm:

```bash
npm start
```

Med yarn:

```bash
yarn start
```

Applikationen kommer att vara tillgänglig på `http://localhost:3000` i din webbläsare.

## Projektstruktur

- **`src/hooks/useWeather.ts`**: En custom hook som hämtar väderdata baserat på användarens position.
- **`src/context/WeatherContext.tsx`**: Context Provider för att dela väderdata mellan komponenter.
- **`src/components`**: Innehåller alla React-komponenter som används i applikationen, såsom `Main`, `Location`, `WeatherDisplay` och `ClothingSuggestion`.
- **`src/services/weatherService.ts`**: Hanterar API-anrop till OpenWeatherMap.
- **`src/utils/translateCondition.ts`**: Översätter väderförhållanden till svenska.

## Hur Applikationen Fungerar

1. **Geolokalisering**: När applikationen laddas, ber den om användarens tillåtelse att hämta geografisk position.
2. **Hämtar Väderdata**: Med hjälp av latitud och longitud från geolokaliseringen, hämtar applikationen väderdata från OpenWeatherMap API.
3. **Tillståndshantering**: Den hämtade datan sparas i en global context som är tillgänglig för alla komponenter.
4. **Visar Information**:
   - **Plats**: Visar användarens nuvarande stad eller ort.
   - **Temperatur och Förhållanden**: Visar aktuell temperatur och väderförhållanden.
   - **Klädförslag**: Ger rekommendationer om lämpliga kläder baserat på vädret.
5. **Laddningsindikator**: Visar en spinner medan data laddas, och hanterar fel om något går snett.


## Licens

Detta projekt är licensierat under MIT-licensen.