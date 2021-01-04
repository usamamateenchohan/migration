import * as types from '../Constants';
import { openNotificationWithIcon } from '../../Components/Common/reUseFunctions';

export const moviesReducer = (state = {}, action) => {
  switch (action.type) {
    case types.GET_MOVIES_SUCCESS:
      return { ...state, moviesList: action.payload }
    case types.GET_MOVIES_FAILURE:
      openNotificationWithIcon(
        'error',
        'Error',
        'Oops something went wrong. Please try again.'
      );
      return { ...state, moviesList: action.payload }

    case types.GET_MOVIE_DETAIL_SUCCESS:
      return { ...state, movieDetail: action.payload }
    case types.GET_MOVIE_DETAIL_FAILURE:
      openNotificationWithIcon(
        'error',
        'Error',
        'Oops something went wrong. Please try again.'
      );
      return { ...state, movieDetail: action.payload }

    default:
      return state
  }
}