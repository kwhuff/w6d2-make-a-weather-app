import React from 'react'
import { Link } from 'react-router'//link is a component built into ReactRouter that allows you to link to different pages
class Main extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return <div>
    <div className='container'>
      <div className='row text-center'>
        <div className='col-sm-12'>
          <h1>A Pretty Great Weather Application</h1>
          <Link to='/today'>
          <button type='button' className='btn btn-default buttonStuff'>Today</button>
          </Link>
          <Link to='/fiveday'>
          <button type='button' className='btn btn-default buttonStuff'>Five Day Forecast</button>
          </Link>
          <Link to='/location'>
          <button type='button' className='btn btn-default buttonStuff'>Location Update</button>
          </Link>
          <div className='panel panel-default'>
            <div className='panel-body weatherInfo'>
            <h1>Indianapolis</h1>
            <h4>November 1st at 3:00PM</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  }
}

export default Main
