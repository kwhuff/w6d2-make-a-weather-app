import React from 'react'
import { Link } from 'react-router'//link is a component built into ReactRouter that allows you to link to different pages
// import classAutoBind from 'react-helpers/dist/classAutoBind'
class Today extends React.Component{
  constructor(props){
    super(props)
    // classAutoBind(this)
    this.componentDidMount = this.componentDidMount.bind(this)

    this.state = {
      temp: '--',
      cond: '--'
    }
  }
  componentDidMount(){
      fetch('http://api.openweathermap.org/data/2.5/weather?q=Indianapolis&units=imperial&APPID=714c72c4f527b8fdaaa3e6c6f47dbcb3')
      .then(response => response.json())
      .then((data) => {
        this.setState ({
          temp: Math.round(data.main.temp),
          cond: data.weather[0].description
          })
        // console.log(data)
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
            <div className='weatherInfo'>
            <p className='tempDisplay'>{this.state.temp}&deg;</p>
            <p className='condition'>{this.state.cond}</p>
            </div>
          </div>
  }
}









export default Today
