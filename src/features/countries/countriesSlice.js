import { createSlice, current } from '@reduxjs/toolkit';
import countryService from '../../services/countries';

export const countriesSlice = createSlice({
  name: 'countries',
  initialState: {
    countries: [],
    isLoading: true,
    search: '',
    favoriteCountries:[],
    favCountriesObjects:[],
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
      state.favoriteCountries.push(action.payload);
      state.favoriteCountries = current(state).favoriteCountries.filter((element, index) => {
        return current(state).favoriteCountries.indexOf(element) === index;
      });
    },

    deleteFromFavorite(state, action){
      const newArray = state.favoriteCountries.filter(item =>{
        return item !== action.payload
      })
      state.favoriteCountries = newArray
    },
    addFavCountriesObjects(state, action){
      state.favCountriesObjects.push(action.payload);
    }
  },
});

export const initializeCountries = () => {
  return async (dispatch) => {
    const countries = await countryService.getAll();
    dispatch(getCountries(countries));
    dispatch(isLoading(false));
  };
};

export const { getCountries, isLoading, search, addToFavorite, deleteFromFavorite, setFavorites, addFavCountriesObjects } = countriesSlice.actions;

export const favoriteCountriesSelector = (state) =>state.countries.favoriteCountries;

export const favCountriesObjects = (state) => state.countries.favCountriesObjects;

export default countriesSlice.reducer;
