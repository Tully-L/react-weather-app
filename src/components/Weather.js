import React from "react";
import '../styles/Weather.css';

const Weather = props => (
    <div className={`weather-container ${(props.city || props.error) ? 'visible' : 'hidden'}`}>
        <div className="weather-box">
            <div className="weather-info">
                {props.city && props.country && (
                    <p className="weather-item location">
                        <span className="icon">📍</span> 
                        <span>Location: {props.city}, {props.country}</span>
                    </p>
                )}
                {props.temperature && (
                    <p className="weather-item">
                        <span className="icon">🌡️</span> 
                        <span>Temperature: {props.temperature}°C</span>
                    </p>
                )}
                {props.humidity && (
                    <p className="weather-item">
                        <span className="icon">💧</span> 
                        <span>Humidity: {props.humidity}%</span>
                    </p>
                )}
                {props.description && (
                    <p className="weather-item">
                        <span className="icon">🌤️</span> 
                        <span>Conditions: {props.description}</span>
                    </p>
                )}
                {props.error && (
                    <p className="weather-item error">
                        <span className="icon">❌</span> 
                        <span>{props.error}</span>
                    </p>
                )}
            </div>
        </div>
    </div>
);

export default Weather;