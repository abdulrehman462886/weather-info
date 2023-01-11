import React from "react";
import "./App.css";

export default function Table(props) {
  

  return (
    <div className="container">
      <div className="container">
        <table className="table my-2">
          <thead>
            <tr>
              <th scope="col">Date</th>
              <th scope="col">Temp</th>
              <th scope="col">Humidity</th>
              <th scope="col">Pressure</th>
              <th scope="col">WindSpeed</th>
              <th scope="col">City</th>
              <th scope="col">Weather</th>  
            </tr>
          </thead>
          <tbody>
            {props.weatherData.list.map((items, index) => {
              const kelvin = Math.round(items.main.temp)
              const celsius = Math.round((kelvin - 273.15))
                if (items.dt_txt.substring(8, 10) == new Date().getDate() + props.i){
                  return (
                    <tr key={index}>
                      <td>{items.dt_txt}</td>
                      <td>{props.temprature === "celsius" ? celsius + "°C" : kelvin + "°K"}</td>
                      <td>{items.main.humidity}</td>
                      <td>{items.main.pressure}</td>
                      <td>{items.wind.speed}</td>
                      <td>{props.weatherData.city.name}</td>
                      <td>{items.weather[0].main}</td>
                      {/* <td>{weather === 'Clouds' ?}</td> */}
                    </tr>
                  );   
                }
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
