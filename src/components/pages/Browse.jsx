import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { initializeCountries, search} from '../../features/countries/countriesSlice';
import BSCard from '../UIs/BSCard';
import { Spinner } from 'react-bootstrap';

function Browse() {
  const dispatch = useDispatch();
  const countriesList = useSelector((state) => state.countries.countries);
  const loading  = useSelector((state) => state.countries.isLoading);
  const searchInput = useSelector((state) => state.countries.search);

  useEffect(() => {
    dispatch(initializeCountries())
}, [dispatch])


  // const countriesFilter = countriesList.filter((res) => {
  //   res.name.common = res.name.common;
  //   return res.name.common.toLowerCase().includes(search);
  // });
 
  if (loading) {
    return <Spinner/>;
  }

  return (
    <div className="browse">
      
      <div className="search" >
        <input type="text" className="searchImput" placeholder="🔍" onChange={(e)=>dispatch(search(e.target.value))} />
      </div>

      <div className="showCards" 
      style={{
        display:"flex",
        flexWrap:"wrap",
        flexDirection:"row"
      }}
      >

          {countriesList.filter((country) => {

            return country.name.common.toLowerCase().includes(searchInput.toLowerCase())
          }).map((country, index) => (  
              <BSCard 
              key={index}
              //key={country.ccn3}
              commonName={country.name.common} 
              officialName={country.name.official}
              population={country.population}
              flag={country.flags.png}
              capital={country.capital}
              currencies={country.currencies}
              languages={country.languages}
              url={`${country.name.common}`}
              data={country}
              />

              ))} 
              
        </div>

    </div>
  );
};

export default Browse;
