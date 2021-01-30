import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import booksReducer from './books/booksReducer';
import authReducer from './auth/authReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  books: booksReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export const store = createStore(rootReducer, applyMiddleware(thunk));
