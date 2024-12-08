import React from "react";
import '../styles/Form.css';

const Form = props => (
    <form onSubmit={props.getWeather} className="weather-form">
        <input type="text" name="city" placeholder="City..." className="form-input"/>
        <input type="text" name="country" placeholder="Country..." className="form-input"/>
        <button className="form-button">Get Weather</button>
    </form>
);

export default Form;