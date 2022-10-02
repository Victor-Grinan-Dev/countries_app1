import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteFromFavorite } from '../../features/countries/countriesSlice';
import { Button } from 'react-bootstrap';

function FavCard({name}) {
    const dispatch = useDispatch();
  return (
    <div className='favCard' >
        <p> { name } </p> <Button onClick={()=>dispatch(deleteFromFavorite(name))}> x </Button>
    </div>
  )
}

export default FavCard;