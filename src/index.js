import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import {Provider} from 'react-redux'
// import 'semantic-ui/dist/semantic.min.css'; //not installed, link in ./public/index.html used instead 

import App from './App';
import store from './redux/store'
// import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Router><Provider store={store}><Route path='/' component={App}/></Provider></Router>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
