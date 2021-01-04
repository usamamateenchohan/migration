import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './Reducers';

const initStore = (initialState = {}) => {
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(thunk)
  );
}

export { initStore };
