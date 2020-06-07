import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux'; 
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import counterReducer from './store/reducer/counter';
import resultsReducer from './store/reducer/results';

const rootReduccer = combineReducers({
    ctr: counterReducer,
    res: resultsReducer
});

const store = createStore(rootReduccer);

ReactDOM.render(<Provider store={ store }><App /> </Provider>, document.getElementById('root'));
registerServiceWorker();
