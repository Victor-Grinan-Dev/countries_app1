import { createSlice } from '@reduxjs/toolkit';
import countryService from '../../services/countries';

const isFavoriteDuplicated = (element, array) => {
  array.forEach(item => {
    if(item === element){
      return true;
    }
    return false;
  });
}

export const countriesSlice = createSlice({
  name: 'countries',
  initialState: {
    countries: [],
    isLoading: true,
    search: '',
    favoriteCountries:[]
  },

  reducers: {

    getCountries(state, action) {
      state.countries = action.payload;
    },

    isLoading(state, action) {
      state.isLoading = action.payload;
    },

    search(state, action) {
      state.search = action.payload;
    },

    setFavorites(state , action){
      state.favoriteCountries = action.payload;
    },
    
    addToFavorite(state, action){
      if (!isFavoriteDuplicated(action.payload, state.favoriteCountries)){
        state.favoriteCountries.push(action.payload);
      }
    },

    deleteFromFavorite(state, action){
      const newArray = state.favoriteCountries.filter(item =>{
        return item !== action.payload
      })
      console.log(newArray)
      state.favoriteCountries = newArray
    },

  },
});

export const initializeCountries = () => {
  return async (dispatch) => {
    const countries = await countryService.getAll();
    dispatch(getCountries(countries));
    dispatch(isLoading(false));
  };
};

export const { getCountries, isLoading, search, addToFavorite, deleteFromFavorite, setFavorites } = countriesSlice.actions;

export const favoriteCountriesSelector = (state) =>state.countries.favoriteCountries;

export default countriesSlice.reducer;
