import { useState } from "react";

interface WeatherData {
  name: string;
  main: {
    temp: number;
    humidity: number;
  };
  wind: {
    speed: number;
  };
}

const API_URL = "https://api.openweathermap.org/data/2.5/weather";

const useWeatherData = () => {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchWeather = async (city: string) => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `${API_URL}?q=${city}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=metric`
      );
      if (!response.ok) {
        throw new Error(
          "Failed to fetch weather data, please enter a valid city name."
        );
      }
      const data = await response.json();
      setWeatherData({
        name: data.name,
        main: {
          temp: data.main.temp,
          humidity: data.main.humidity,
        },
        wind: {
          speed: data.wind.speed,
        },
      });
    } catch (error) {
      setError(error.message);
      setWeatherData(null);
    } finally {
      setLoading(false);
    }
  };

  return { weatherData, loading, error, fetchWeather };
};

export default useWeatherData;
