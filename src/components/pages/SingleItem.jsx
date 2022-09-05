import React from 'react';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

function SingleItem({weatherdata}) {
  //const [weatherData, setWeatherData] = useState({})
  const location = useLocation();
  const data = location.state.data;
  const name = data.name.common;

  const countryImage = 'https://source.unsplash.com/500x400/?' + name;
  const openWeather = "https://api.openweathermap.org/data/2.5/weather";
  const secretKey = process.env.REACT_APP_WEATHER_ID;

  return (

    <div 
    style={{
      color:"white"
    }}

    className="singleItem"
    >


    </div>
  )
}

export default SingleItem