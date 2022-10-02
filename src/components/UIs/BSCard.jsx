import React, { useEffect  } from 'react';

import officialNameIcon from '../assets/countries_icons/countries_official_name.png';
import populationIcon from '../assets/countries_icons/countries_population.png';
import capitalIcon from '../assets/countries_icons/countries_capital.png';
import langIcon from '../assets/countries_icons/countries_language.png';
import currencyIcon from '../assets/countries_icons/countries_currency.png';

import { Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import Card from 'react-bootstrap/Card';

import { useDispatch, useSelector } from 'react-redux';
import { addToFavorite, deleteFromFavorite, favoriteCountriesSelector } from '../../features/countries/countriesSlice';

import { populationReader } from '../functions/populationReader';

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
  const favoriteList = useSelector(favoriteCountriesSelector);
  const dispatch = useDispatch();
  const cityImage = 'https://source.unsplash.com/500x400/?'  +  commonName; 

  useEffect(()=>{
    localStorage.setItem('favoriteCountries', favoriteList);
  }, [favoriteList])
    
  const favoriteHandler = (e) => {
    if(e.target.checked){
      dispatch(addToFavorite(data?.name.common));
    } 
    else {
      console.log('deleted', data.name.common)
      dispatch(deleteFromFavorite(data.name.common));
    }  
  }

   const checkIsFavorite = (commonName) => {
    for(let item in favoriteList){

      if( favoriteList[item] === commonName){
        return true;
      }
    }
    return false
  };

  
  return (
    <div style={{
      margin:"20px 0"
    }}>
      <Card style={{ width: '18rem' }}>
        {/* checkIsFavorite(commonName) */}
        <Card.Img variant="top" src={cityImage} style={{
          backgroundColor:"beige"
        }}/>
        <Card.Body>
            <Card.Title style={{
              display:"flex",
              justifyContent:"space-between"
            }}>
              {commonName} 
             
            <div>
              <p>favorite</p>
              <input type="checkbox" name="isFavorite" onClick={favoriteHandler} defaultChecked={checkIsFavorite() ? true : false} value={checkIsFavorite()}/>
            </div>

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
              to={url} state={{data:data}}>
              <Button 
                variant="primary" 
                >
                  More Info
                  
                </Button>
            </LinkContainer>

        </Card.Body>
      </Card>
    </div>
  )
}

export default BSCard;