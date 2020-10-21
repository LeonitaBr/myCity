import React from "react"; 
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import { Provider } from 'react-redux';

import ReduxThunk  from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import  rootReducer  from "./src/store/rootReducer";

const app = () => {

    const store = createStore(rootReducer, applyMiddleware(ReduxThunk))

    return(
        <Provider store = {store}>
            <App/>   
        </Provider>
    )
 
}

AppRegistry.registerComponent(appName, () => app);
