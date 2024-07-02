import React from "react";
import { Card, CardContent, Typography, CircularProgress } from "@mui/material";

interface WeatherCardProps {
  data: {
    name: string;
    main: {
      temp: number;
      humidity: number;
    };
    wind: {
      speed: number;
    };
  } | null;
  loading: boolean;
}

const WeatherCard: React.FC<WeatherCardProps> = ({ data, loading }) => {
  const formatTemperature = (temp: number) => {
    return Math.round(temp * 2) / 2;
  };

  if (loading) {
    return <CircularProgress />;
  }

  if (!data) {
    return null;
  }

  return (
    <Card>
      <CardContent>
        <Typography variant="h5" gutterBottom>
          {data.name}
        </Typography>
        <Typography variant="body1">
          Temperature: {formatTemperature(data.main.temp)} °C
        </Typography>
        <Typography variant="body1">
          Humidity: {data.main.humidity} %
        </Typography>
        <Typography variant="body1">
          Wind Speed: {data.wind.speed} m/s
        </Typography>
      </CardContent>
    </Card>
  );
};

export default WeatherCard;
