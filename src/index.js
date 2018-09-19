import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom"
import './index.css';
import Filmmaker from './Filmmaker'
import registerServiceWorker from './registerServiceWorker';
//Route included to wrap and make routing happen
ReactDOM.render(

    <Router>
    <Filmmaker />
    </Router>

    ,document.getElementById('root'));

registerServiceWorker();