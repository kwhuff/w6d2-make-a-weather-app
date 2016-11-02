import React from 'react'
import { Link } from 'react-router'
import { sharedState, attachSharedState, detachSharedState } from 'react-helpers/dist/sharedState'

var moment = require('moment');
var date = moment().add(1,'days').format('dddd')

class FiveDay extends React.Component{
  constructor(props){
    super(props)
    this.componentDidMount = this.componentDidMount.bind(this)

    this.state = {
      temp: '--',
      cond: '',
      day: ''
    }

  }

  componentDidMount(){
    fetch('http://api.openweathermap.org/data/2.5/forecast?q=London,us&mode=JSON&APPID=714c72c4f527b8fdaaa3e6c6f47dbcb3')
    .then(response => response.json())
    .then((stuff) => {
      this.setState ({
        temp1: Math.round(stuff.list[0].main.temp_max * (9/5) - 459.67),
        temp1L: Math.round(stuff.list[0].main.temp_min * (9/5) - 459.67),
        temp2: Math.round(stuff.list[1].main.temp_max * (9/5) - 459.67),
        temp2L: Math.round(stuff.list[1].main.temp_min * (9/5) - 459.67),
        temp3: Math.round(stuff.list[2].main.temp_max * (9/5) - 459.67),
        temp3L: Math.round(stuff.list[2].main.temp_min * (9/5) - 459.67),
        temp4: Math.round(stuff.list[3].main.temp_max * (9/5) - 459.67),
        temp4L: Math.round(stuff.list[3].main.temp_min * (9/5) - 459.67),
        temp5: Math.round(stuff.list[4].main.temp_max * (9/5) - 459.67),
        temp5L: Math.round(stuff.list[4].main.temp_min * (9/5) - 459.67),
        cond1: stuff.list[0].weather[0].description,
        cond2: stuff.list[1].weather[0].description,
        cond3: stuff.list[2].weather[0].description,
        cond4: stuff.list[3].weather[0].description,
        cond5: stuff.list[4].weather[0].description,
        day1: moment().add(1,'days').format('dddd').toUpperCase(),
        day2: moment().add(2,'days').format('dddd').toUpperCase(),
        day3: moment().add(3,'days').format('dddd').toUpperCase(),
        day4: moment().add(4,'days').format('dddd').toUpperCase(),
        day5: moment().add(5,'days').format('dddd').toUpperCase(),

      })
      console.log(stuff)
    })

  }

  render(){
    return <div>
          <Link to='/'>
          <button type='button' className='btn btn-default buttonStuff'>TODAY</button>
          </Link>
          <Link to='/fiveday'>
          <button type='button' className='btn btn-default buttonStuff'>FIVE DAY FORECAST</button>
          </Link>
          <Link to='/location'>
          <button type='button' className='btn btn-default buttonStuff'>LOCATION UPDATE</button>
          </Link>
          <div className='container fiveThings'>
            <div className='row'>
              <div className='col-sm-3'>
                {this.state.temp1}  <span className='loTemp'>{this.state.temp1L}</span>
              </div>
              <div className='col-sm-3'>
                <span className='weatherLogo'><i className="fa fa-sun-o" aria-hidden="true"></i></span>
              </div>
              <div className='col-sm-6'>
                {this.state.day1}
              </div>
            </div>
            <br></br>
            <div className='row'>
              <div className='col-sm-3'>
                {this.state.temp2}  <span className='loTemp'>{this.state.temp2L}</span>
              </div>
              <div className='col-sm-3'>
                <span className='weatherLogo'><i className="fa fa-sun-o" aria-hidden="true"></i></span>
              </div>
              <div className='col-sm-6'>
                {this.state.day2}
              </div>
            </div>
            <br></br>
            <div className='row'>
              <div className='col-sm-3'>
                {this.state.temp3}  <span className='loTemp'>{this.state.temp3L}</span>
              </div>
              <div className='col-sm-3'>
                <span className='weatherLogo'><i className="fa fa-sun-o" aria-hidden="true"></i></span>
              </div>
              <div className='col-sm-6'>
                {this.state.day3}
              </div>
            </div>
            <br></br>
            <div className='row'>
              <div className='col-sm-3'>
                {this.state.temp4}  <span className='loTemp'>{this.state.temp4L}</span>
              </div>
              <div className='col-sm-3'>
                <span className='weatherLogo'><i className="fa fa-sun-o" aria-hidden="true"></i></span>
              </div>
              <div className='col-sm-6'>
                {this.state.day4}
              </div>
            </div>
            <br></br>
            <div className='row'>
              <div className='col-sm-3'>
                {this.state.temp5}  <span className='loTemp'>{this.state.temp5L}</span>
              </div>
              <div className='col-sm-3'>
                <span className='weatherLogo'><i className="fa fa-cloud" aria-hidden="true"></i></span>
              </div>
              <div className='col-sm-6'>
                {this.state.day5}
              </div>
            </div>
          </div>


            </div>

  }
}

export default FiveDay
