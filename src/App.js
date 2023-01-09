// import React from "react";
// import { useState } from "react";
// import "./App.css";

// function App() {
//   const apiKey = "01df7646ebd1d71af2c4f78f747f263a";
//   const [weatherData, setweatherData] = useState([{}]);
//   const [city, setCity] = useState("");

//   const getWeather = (event) => {
//     if (event.key == "Enter") {
//       fetch(
//         `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
//       )
//         .then((response) => response.json())
//         .then((data) => {
//           setweatherData(data);
//           console.log(data)
//           setCity("");
//         });
//     }
//   };
//   return (
//     <div className="container">
//       <input
//         className="input"
//         placeholder="Enter City..."
//         onChange={(e) => setCity(e.target.value)}
//         value={city}
//         onKeyPress={getWeather}
//       ></input>

//     {typeof weatherData.main === 'undefined' ?(
//       <div>
//         <p>Welcome to weather app! Enter in a city to get weather of</p>
//       </div>
//     ):(
//       <div className='weather-data'>
//          <p className='city'>City: {weatherData.name}</p>
//          <p className='city'>Temprature: {weatherData.main.temp}</p>
//          <p className='city'>Pressure: {weatherData.main.pressure}</p>
//          <p className='city'>Humidity: {weatherData.main.humidity}</p>
//       </div>
//     )}

//     </div>
//   );
// }

// export default App;

import React from "react";
import { useState } from "react";
import "./App.css";

function App() {
  const apiKey = "01df7646ebd1d71af2c4f78f747f263a";
  const [weatherData, setweatherData] = useState([{}]);
  const [city, setCity] = useState("");

  const getWeather = (event) => {
    if (event.key == "Enter") {
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
          <div className="container">
            <table className="table my-3">
              <thead>
                <tr>
                  <th scope="col">Date</th>
                  <th scope="col">Temp</th>
                  <th scope="col">Humidity</th>
                  <th scope="col">Pressure</th>
                  <th scope="col">WindSpeed</th>
                  <th scope="col">City</th>
                </tr>
              </thead>
              <tbody>
                {weatherData.list.map((items, index) => {
                  if (items.dt_txt.substring(9, 10) == new Date().getDate())
                    return (
                      <tr key={index}>
                        <td> {items.dt_txt}</td>
                        <td>{Math.round(items.main.temp)}F</td>
                        <td>{items.main.humidity}</td>
                        <td>{items.main.pressure}</td>
                        <td>{items.wind.speed}</td>
                        <td>{weatherData.city.name}</td>
                      </tr>
                    );
                })}
              </tbody>
            </table>
          </div>
          <div className="container">
            <table className="table my-3">
              <thead>
                <tr>
                  <th scope="col">Date</th>
                  <th scope="col">Temp</th>
                  <th scope="col">Humidity</th>
                  <th scope="col">Pressure</th>
                  <th scope="col">WindSpeed</th>
                  <th scope="col">City</th>
                </tr>
              </thead>
              <tbody>
                {weatherData.list.map((items, index) => {
                  if (items.dt_txt.substring(8, 10) == new Date().getDate() + 1)
                    return (
                      <tr key={index}>
                        <td> {items.dt_txt}</td>
                        <td>{Math.round(items.main.temp)}F</td>
                        <td>{items.main.humidity}</td>
                        <td>{items.main.pressure}</td>
                        <td>{items.wind.speed}</td>
                        <td>{weatherData.city.name}</td>
                      </tr>
                    );
                })}
              </tbody>
            </table>
          </div>
          <div className="container">
            <table className="table my-3">
              <thead>
                <tr>
                  <th scope="col">Date</th>
                  <th scope="col">Temp</th>
                  <th scope="col">Humidity</th>
                  <th scope="col">Pressure</th>
                  <th scope="col">WindSpeed</th>
                  <th scope="col">City</th>
                </tr>
              </thead>
              <tbody>
                {weatherData.list.map((items, index) => {
                  if (items.dt_txt.substring(8, 10) == new Date().getDate() + 2)
                    return (
                      <tr key={index}>
                        <td> {items.dt_txt}</td>
                        <td>{Math.round(items.main.temp)}F</td>
                        <td>{items.main.humidity}</td>
                        <td>{items.main.pressure}</td>
                        <td>{items.wind.speed}</td>
                        <td>{weatherData.city.name}</td>
                      </tr>
                    );
                })}
              </tbody>
            </table>
          </div>
          <div className="container">
            <table className="table my-3">
              <thead>
                <tr>
                  <th scope="col">Date</th>
                  <th scope="col">Temp</th>
                  <th scope="col">Humidity</th>
                  <th scope="col">Pressure</th>
                  <th scope="col">WindSpeed</th>
                  <th scope="col">City</th>
                </tr>
              </thead>
              <tbody>
                {weatherData.list.map((items, index) => {
                  if (items.dt_txt.substring(8, 10) == new Date().getDate() + 3)
                    return (
                      <tr key={index}>
                        <td> {items.dt_txt}</td>
                        <td>{Math.round(items.main.temp)}F</td>
                        <td>{items.main.humidity}</td>
                        <td>{items.main.pressure}</td>
                        <td>{items.wind.speed}</td>
                        <td>{weatherData.city.name}</td>
                      </tr>
                    );
                })}
              </tbody>
            </table>
          </div>
          <div className="container">
            <table className="table my-3">
              <thead>
                <tr>
                  <th scope="col">Date</th>
                  <th scope="col">Temp</th>
                  <th scope="col">Humidity</th>
                  <th scope="col">Pressure</th>
                  <th scope="col">WindSpeed</th>
                  <th scope="col">City</th>
                </tr>
              </thead>
              <tbody>
                {weatherData.list.map((items, index) => {
                  if (items.dt_txt.substring(8, 10) == new Date().getDate() + 4)
                    return (
                      <tr key={index}>
                        <td> {items.dt_txt}</td>
                        <td>{Math.round(items.main.temp)}F</td>
                        <td>{items.main.humidity}</td>
                        <td>{items.main.pressure}</td>
                        <td>{items.wind.speed}</td>
                        <td>{weatherData.city.name}</td>
                      </tr>
                    );
                })}
              </tbody>
            </table>
          </div>
          <div className="container">
            <table className="table my-3">
              <thead>
                <tr>
                  <th scope="col">Date</th>
                  <th scope="col">Temp</th>
                  <th scope="col">Humidity</th>
                  <th scope="col">Pressure</th>
                  <th scope="col">WindSpeed</th>
                  <th scope="col">City</th>
                </tr>
              </thead>
              <tbody>
                {weatherData.list.map((items, index) => {
                  if (items.dt_txt.substring(8, 10) == new Date().getDate() + 5)
                    return (
                      <tr key={index}>
                        <td> {items.dt_txt}</td>
                        <td>{Math.round(items.main.temp)}F</td>
                        <td>{items.main.humidity}</td>
                        <td>{items.main.pressure}</td>
                        <td>{items.wind.speed}</td>
                        <td>{weatherData.city.name}</td>
                      </tr>
                    );
                })}
              </tbody>
            </table>
          </div>
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
