import React from 'react';
import reactDom from 'react-dom';
import { Provider } from 'react-redux';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reduxThunk from 'redux-thunk';
import CssBaseline from '@material-ui/core/CssBaseline';
import App from 'App';
import accidentreducers from 'redux/Accidents/reducers';
import userReducers from 'redux/User/reducers';
import 'index.scss';

const middleware = applyMiddleware(reduxThunk);
const rootReducer = combineReducers({
  accidents: accidentreducers,
  user: userReducers,
});
const store = createStore(rootReducer, composeWithDevTools(middleware));
const app = (
  <Provider store={store}>
    <CssBaseline />
    <App />
  </Provider>
);

reactDom.render(app, document.getElementById('root') as HTMLElement);
