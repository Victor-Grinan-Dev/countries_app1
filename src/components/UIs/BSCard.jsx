import React from 'react';
import Card from 'react-bootstrap/Card';

import officialNameIcon from '../assets/countries_icons/countries_official_name.png';
import populationIcon from '../assets/countries_icons/countries_population.png';
import capitalIcon from '../assets/countries_icons/countries_capital.png';
import langIcon from '../assets/countries_icons/countries_language.png';
import currencyIcon from '../assets/countries_icons/countries_currency.png';

//import Image from "assets/hotw-logo.png"
import { Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { populationReader } from '../functions/populationReader';
//TODO: Million-Thouthans conversor.
//ex data in: [10.5, 0.5, 0.0035, 0.00010]
//ex data out: [10.5M, 500k, 3.5k, 100]



function BSCard({
    commonName,
    officialName,
    population,
    flag,
    capital,
    currencies,
    languages,
    url,
    data
}) {

  const [loading, setLoading] = useState(false);

  const [weateher, setWeather] = useState();


  const capitalStart = (str) => str.charAt(0).toUpperCase() + str.slice(1);
  const cityImage = 'https://source.unsplash.com/500x400/?'  +  commonName; //+ capital;


  return (
    <div style={{
      margin:"20px 0"
    }}>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={cityImage} style={{
          backgroundColor:"beige"
        }}/>
        <Card.Body>
            <Card.Title style={{
              display:"flex",
              justifyContent:"space-between"
            }}>
              {commonName} 
              <img src={flag} alt="flag" className="flag"/>
            </Card.Title>
  
            <div >

              <div className='smallData'>
                <p><img src={officialNameIcon} alt="officialName" className="tinyIcon" /></p>
                <p>{officialName}</p>
              </div>
          
              <div className='smallData'>
                <p><img src={populationIcon} alt="officialName" className="tinyIcon" /></p>
                <p>{populationReader(population)}</p>
              </div>
          
              <div className='smallData'>
                <p><img src={capitalIcon} alt="officialName" className="tinyIcon" /></p>
                <p>{capital}</p>
              </div>

              <div className='smallData'>
                <p><img src={langIcon} alt="officialName" className="tinyIcon" /></p>
                <div className="repeatedSmallData">
                  {
                    Object.values(languages || {}).map((value, i)=>(
                      
                        <p key={i}> {(i ? '' : '') + value} </p>
                      
                    ))
                  }
                </div>
              </div>

              <div className='smallData'>
                <p><img src={currencyIcon} alt="officialName" className="tinyIcon" /></p>
                <div className="repeatedSmallData">
                  {
                    Object.values(currencies || {}).map((value, i)=>(
                      
                        <p key={i}> {(i ? '' : '') + value.name} </p>
                      
                    ))
                  }
                </div>
            </div>
          </div>

            <LinkContainer 
              to={url} weatherdata={weateher} state={{data:data}}>
              <Button 
                variant="primary" 
                >
                  More Info TEST
                  
                </Button>
            </LinkContainer>

        </Card.Body>
      </Card>
    </div>
  )
}

export default BSCard;