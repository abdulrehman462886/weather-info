import React from "react";
import { useState } from "react";
import "./App.css";
import Table from "./Table";

function App() {
  const apiKey = "01df7646ebd1d71af2c4f78f747f263a";
  const [weatherData, setweatherData] = useState([{}]);
  const [city, setCity] = useState("");

  const getWeather = (event) => {
    if (event.key === "Enter") {
      fetch(
        `http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`
      )
        .then((response) => response.json())
        .then((data) => {
          setweatherData(data);
          console.log(data);
          setCity("");
        });
    }
  };
  const i = [0, 1, 2, 3, 4, 5];
  return (
    <div className="container">
      <input
        className="input"
        placeholder="Enter City..."
        onChange={(e) => setCity(e.target.value)}
        value={city}
        onKeyPress={getWeather}
      ></input>

      {typeof weatherData.list === "undefined" ? (
        <div>
          <p>Welcome to weather app! Enter in a city to get weather of</p>
        </div>
      ) : (
        <>
          {i.map((i) => (
            <Table weatherData={weatherData} i={i} />
          ))}
        </>
      )}
      {weatherData.cod === "404" ? (
        <p>
          <strong>City not found.</strong>
        </p>
      ) : (
        <></>
      )}
    </div>
  );
}

export default App;
