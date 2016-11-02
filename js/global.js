import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, Link, browserHistory } from 'react-router'
import Today from '../components/Today'
import FiveDay from '../components/FiveDay'
import Location from '../components/Location'
import Main from '../components/Main'

var moment = require('moment');
var date = moment().format('MMMM Do YYYY, h:mm:ss a')
var displayMoment = document.getElementById('dateTime')
displayMoment.innerHTML = date

ReactDOM.render(

  <Router history={browserHistory}>
    <Route path="/" component={Today}/>
    <Route path="/fiveday" component={FiveDay}/>
    <Route path="/location" component={Location}/>
  </Router>

  , document.getElementById('weather')
)
