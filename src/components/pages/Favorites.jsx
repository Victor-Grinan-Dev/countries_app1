import React, { Children } from 'react';
import { useSelector } from 'react-redux';
import { favoriteCountriesSelector } from '../../features/countries/countriesSlice';
import DraggingBoard from '../UIs/DraggingBoard';
import FavCard from '../UIs/FavCard';

function Favorites() {
  const countries = useSelector(favoriteCountriesSelector);

  return (
    <div className='page' style={{ display:"flex", alignItems:"center", flexDirection:"column"}}>
      <h2 style={{color:"white"}}>Drag and Drop:</h2>
      
      <div 
      className="dnd" 
      style={{display:"flex"}}>

        <DraggingBoard>
          
            {
              countries.map((c, i) => (
                <FavCard key={i} name={c} id={i}/>
              ))
            }
        </DraggingBoard>

      </div>

    </div>

  )
}

export default Favorites