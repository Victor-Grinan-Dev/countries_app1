import React from 'react';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

function SingleItem({weatherdata}) {
  const [weatherData, setWeatherData] = useState({})
  const location = useLocation();
  const data = location.state.data;
  const name = data.name.common;

  const countryImage = 'https://source.unsplash.com/500x400/?' + name;

  const openWeather = "https://api.openweathermap.org/data/2.5/weather?";
  const secretKey = "80e877059407012cbef59f8ac82bcf1c";

  const getWeather = (city) => axios.get(`${openWeather}?q=${city}&appid=${secretKey}&units=metric`);

  useEffect(() => {
    getWeather(data.capital).then(res=>{
      console.log(res.data);
      const data = res.data.main;
      setWeatherData(data);
      })
      .catch((err)=>{
        console.log("connection error: ", err);
      })
    }, []);

  console.log(weatherdata)

  return (
    //TODO: clean the css
    <div 
    style={{
      color:"white"
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