import React from "react";
import { Container, CssBaseline, Typography, Box } from "@mui/material";
import useWeatherData from "../hooks/useWeatherData.ts";
import WeatherForm from "../components/WeatherForm.tsx";
import WeatherCard from "../components/WeatherCard.tsx";

const Weather = () => {
  const { weatherData, loading, error, fetchWeather } = useWeatherData();

  const handleSubmit = (city) => {
    fetchWeather(city);
  };

  return (
    <Container maxWidth="sm">
      <CssBaseline />
      <Box my={4}>
        <div className="items-center bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 p-4">
          <Typography
            variant="h4"
            component="h1"
            gutterBottom
            sx={{ color: "#FFF", textAlign: "center" }}
          >
            Weather Dashboard
          </Typography>
          <WeatherForm onSubmit={handleSubmit} />
          <Box mt={2}>
            {error && (
              <Typography variant="body1" color="error">
                {error}
              </Typography>
            )}
            <WeatherCard data={weatherData} loading={loading} />
          </Box>
        </div>
      </Box>
    </Container>
  );
};

export default Weather;
