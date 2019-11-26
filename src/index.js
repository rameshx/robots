import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import 'tachyons';
import { searchRobots, retrieveRobots } from './reducers';
import App from './containers/App'
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import ThunkMiddleware from 'redux-thunk';
const rootReducer = combineReducers({searchRobots, retrieveRobots});
const store = createStore(rootReducer, applyMiddleware(ThunkMiddleware));

ReactDOM.render(  
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));

serviceWorker.unregister();
