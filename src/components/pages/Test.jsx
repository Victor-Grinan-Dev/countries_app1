import React from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';

const openWeather = "https://api.openweathermap.org/data/2.5/weather";
const secretKey = "80e877059407012cbef59f8ac82bcf1c";
let city = "Helsinki";



function Test() {
    const [data, setData] = useState({})

    const getWeather = (city) => {
        axios.get(`${openWeather}?q=${city}&appid=${secretKey}&units=metric`)
        .then(res=>{
            setData(res.data);
        })
        .catch((err) => {
            console.log("axios get error: ", err)
        });
    };

    useEffect(()=>{
        getWeather(city)
    },[])
  
  return (
    <div style={{
        color:"beige"
    }}>
        <h1>Test:</h1>
        {/* <h1>The weather in {data.name}: {data}°C</h1> */}
        <ul>

        </ul>
    </div>
  )
}

export default Test;