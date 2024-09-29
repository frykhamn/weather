import "./App.css";
import { WeatherProvider } from "./context/WeatherContext";
import { Main } from "./components/Main";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <WeatherProvider>
        <header>
          <h1>Vädret</h1>
        </header>
        <div className="wrapper">
          <Main />
        </div>
        <footer>
          <p>&copy;2024 Klä dig!</p>
        </footer>
      </WeatherProvider>
    </QueryClientProvider>
  );
}

export default App;
