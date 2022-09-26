import React from 'react';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { populationReader } from '../functions/populationReader';

function SingleItem() {
  //const [weatherData, setWeatherData] = useState({})
  const location = useLocation();
  const data = location.state.data;

  const country = data.name.common;
  const officialName = data.name.official;
  const capital = data.capital[0];
  const population = data.population
  const [lat, lon] = data.capitalInfo.latlng//for capital only

  const [feels_like, setFeels_like] = useState('')
  const [humidity, setHumidity] = useState('')
  const [pressure, setPressure] = useState('')
  const [temp, setTemp] = useState('')
  const [temp_max, setTemp_max] = useState('')
  const [temp_min, setTemp_min] = useState('')
  const [weatherStation, setWeatherStation] = useState('')
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
   
  const countryImage = 'https://source.unsplash.com/500x400/?' + country;
  const openWeatherUrl =`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=46267ebe587dbb2011a3feb80d22fa96`; //my key doesnt work => TODO: ask Margit.

useEffect(() => {
  setLoading(true);
  try{
    axios
    .get(openWeatherUrl)
    .catch(() => {
      setError(true);
      setLoading(false);
    })
    .then((res) => {      
      setFeels_like(res.data.main.feels_like);
      setHumidity(res.data.main.humidity);
      setPressure(res.data.main.pressure);
      setTemp(res.data.main.temp);
      setTemp_max(res.data.main.temp_max);
      setTemp_min(res.data.main.temp_min);
      setWeatherStation(res.data.name)
      setLoading(false);
    });
  } catch (err){
    console.log(err);
  }
  
}, []);

if (loading){
  return(
    <p>Loading...</p>
  )
}

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

    className="singleItem page"
    >
         <h2 >Name: {data.name.common} <img src={data.flags.png} alt={data.name.common} style={{ width:"30px" }} /></h2>
        <hr />
        <p>Official name: {officialName}</p>
        <p>Population: {populationReader(population)}</p>
        <p>Capital: {capital} - (Weather station: {weatherStation})</p> 
        <p>Temp: {temp}°C</p>
        <img src={countryImage} alt="country" />

        <div>
          <h2>Extra Temperature Data:</h2> 
          <p>Humidity: {humidity} kJ</p>
          <p>Atmospheric Pressure: {pressure} Pascals</p>
          <p>Feels_like: {feels_like}°C</p>
          <p>Max Temperatures: {temp_max}°C</p>
          <p>Min Temperatures: {temp_min}°C</p>
        </div>
    </div>
  )
}

export default SingleItem