import React from "react";
import { useState } from "react";
import "./App.css";
import RadioButton from "./RadioUnitButton";
import Table from "./Table";

function App() {
  const apiKey = "01df7646ebd1d71af2c4f78f747f263a";
  const [weatherData, setweatherData] = useState([{}]);
  const [city, setCity] = useState("");
  const [temprature, setTemprature] = useState("");
  const updateUnit = (event) => setTemprature(event.target.value);

  const foo = () => {
    let tablelist = [];
    for (let i = 0; i < 6; i++)
      tablelist.push(
        <Table
          weatherData={weatherData}
          temprature={temprature}
          i={i}
          key={i}
        />
      );
    return tablelist;
  };
  const getWeather = (event) => {
    if (event.key === "Enter") {
      fetch(
        `http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`
      )
        .then((response) => response.json())
        .then((data) => {
          setweatherData(data);
          setCity("");
        });
    }
  };
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
          <p>Welcome to weather app! Enter a City to get Weather of</p>
        </div>
      ) : (
        <>
          <RadioButton
            updateUnit={updateUnit}
          ></RadioButton>
          {foo()}
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
