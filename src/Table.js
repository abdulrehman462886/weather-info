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
            </tr>
          </thead>
          <tbody>
            {props.weatherData.list.map((items, index) => {
              const fahrenheit = Math.round(items.main.temp)
              const celsius = Math.round((fahrenheit - 32) * 5/9)
                if (items.dt_txt.substring(8, 10) == new Date().getDate() + props.i){
                  return (
                    <tr key={index}>
                      <td>{items.dt_txt}</td>
                      <td>{props.temprature === "celsius" ? celsius + "°C" : fahrenheit + "°F"}</td>
                      <td>{items.main.humidity}</td>
                      <td>{items.main.pressure}</td>
                      <td>{items.wind.speed}</td>
                      <td>{props.weatherData.city.name}</td>
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
