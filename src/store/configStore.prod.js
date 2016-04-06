import { createStore, compose, applyMiddleware } from 'redux';
import rootReducer from '../reducers';
import promise from 'redux-promise';
import thunk from 'redux-thunk';

const enhancer = compose(
  applyMiddleware(thunk, promise)
);

export default function configureStore(initialState) {
  return createStore(rootReducer, initialState, enhancer);
}
