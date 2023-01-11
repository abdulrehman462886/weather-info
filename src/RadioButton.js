import React from 'react'

export default function RadioButton(props) {
  return (
    <div>
      <strong>Look Temprature in</strong>
      <div className="form-check form-check-inline my-3 mx-3">
      <input
        className="form-check-input"
        type="radio"
        name="degree-type"
        id="celsius"
        value="celsius"
        onChange={props.updateUnit}
        />
        <label className="form-check-label" htmlFor="celsius">Celsius</label>
      </div>
      <div className="form-check form-check-inline">
        <input
        className="form-check-input"
        type="radio"
        name="degree-type"
        id="farenheit"
        value="fahrenheit"
        onChange={props.updateUnit}
        />
        <label className="form-check-label" htmlFor="farenheit">Farenheit</label>
      </div>
    </div>
  )
}
