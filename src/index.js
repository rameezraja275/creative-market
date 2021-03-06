import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import App from './js/App';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import store from './js/config/store';

// CONVERT IT TO LATEST FIRBASE API CHANGES 
// https://github.com/Sv1nnet/mario-plan-migrated-on-redux601-and-firebase300-alpha
store.firebaseAuthIsReady.then(()=>{
  ReactDOM.render(<App />, document.getElementById('root'));
})



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
