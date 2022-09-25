import React from 'react';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

function SingleItem() {
  const [weatherData, setWeatherData] = useState({})
  const location = useLocation();
  const data = location.state.data;
  const name = data.name.common;
  const capital = data.capital[0];
  const [lat, lon] = data.capitalInfo.latlng
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
   
  const countryImage = 'https://source.unsplash.com/500x400/?' + name;

  const openWeatherUrl =`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.OPEN_WEATHER_MAP_KEY}`


useEffect(() => {
  axios
    .get(openWeatherUrl)
    .catch(() => {
      setError(true);
      setLoading(false);
    })
    .then((res) => {
      setWeatherData(res.data);
      setLoading(false);
    });
}, []);


  return (
    //TODO: clean the css
    <div 
    style={{
      color:"white",
      flexDirection:"column",
      display:"flex",
      justifyContent:"center",
      alignItems:"center"
    }}

    className="singleItem"
    >
         <h2 >Name: {data.name.common} <img src={data.flags.png} alt={data.name.common} style={{ width:"30px" }} /></h2>
        <hr />
        <p>Official name: {data.name.official}</p>
        <p>Population: {data.population}</p>
        <p>Capital: {data.capital}</p> 
        {weatherData.temperature && <p>Temperature in the capital: {weatherData.temperature}</p> }
        <img src={countryImage} alt="country" />
    </div>
  )
}

export default SingleItem