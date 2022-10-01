import React, { useEffect } from 'react';

const image = "http://source.unsplash.com/IoQioGLrz3Y";

function Home() {

  return (
    <div className= "homeBox" >
      <p className="refText" > Victor Griñán's </p>
      <h1 className="refText title">Countries App</h1>
      <div className='refs'>
            <div>
            <p className="refText" > "https://restcountries.com/" </p>
            </div>
            <div>
            <p className="refText" >Photo by Nataliya Vaitkevich: https://www.pexels.com/photo/passport-and-polaroid-pictures-7235902/</p>
            </div>
      </div> 
    </div>
  )
}

export default Home;
