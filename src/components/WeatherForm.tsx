import React, { useState } from "react";

interface WeatherFormProps {
  onSubmit: (city: string) => void;
}

const WeatherForm: React.FC<WeatherFormProps> = ({ onSubmit }) => {
  const [city, setCity] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = () => {
    if (city.trim() === "") {
      setError("Please enter a city name");
    } else {
      onSubmit(city);
      setCity("");
      setError("");
    }
  };

  return (
    <div className=" bg-white p-6 rounded-lg shadow-lg ">
      <div className="flex space-y-4 md:space-y-0 md:space-x-4 ">
        <input
          type="text"
          placeholder="Enter City Name"
          value={city}
          onChange={(e) => {
            setCity(e.target.value);
            setError("");
          }}
          required
          className={`flex-grow p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200 ${
            error ? "border-red-500" : ""
          }`}
        />
        <button
          className="p-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200"
          onClick={handleSubmit}
        >
          Get Weather
        </button>
      </div>
      {error && <p className="text-red-500 text-sm pt-1">{error}</p>}
    </div>
  );
};

export default WeatherForm;
