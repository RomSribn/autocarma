import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import CssBaseline from '@material-ui/core/CssBaseline';
import App from 'App';
import accidentsReducer from 'redux/Accidents/reducers';
import 'index.scss';

const middleware = applyMiddleware(thunkMiddleware);
const rootReducer = combineReducers({
  accidents: accidentsReducer,
});
const store = createStore(rootReducer, composeWithDevTools(middleware));
const app = (
  <Provider store={store}>
    <CssBaseline />
    <App />
  </Provider>
);

ReactDOM.render(app, document.getElementById('root') as HTMLElement);
