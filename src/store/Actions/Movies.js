import { api } from '../../service/api';
import * as types from '../Constants';

export const getMovies = (value, page) => {
  const options = {
    url: `?s=${value}&page=${page}&apikey=${process.env.REACT_APP_KEY}`
  };

  options.types = [
    types.GET_MOVIES_SUCCESS,
    types.GET_MOVIES_FAILURE
  ];

  return api.get(options);
}

export const getMovieDetail = (id) => {
  const options = { url: `?i=${id}&apikey=${process.env.REACT_APP_KEY}` };

  options.types = [
    types.GET_MOVIE_DETAIL_SUCCESS,
    types.GET_MOVIE_DETAIL_FAILURE
  ];

  return api.get(options);
}