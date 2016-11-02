import React from 'react'
import { Link } from 'react-router'//link is a component built into ReactRouter that allows you to link to different pages
class Today1 extends React.Component{
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
          <button type='button' className='btn btn-default'>Today</button>
          </Link>
          <Link to='/fiveday'>
          <button type='button' className='btn btn-default'>Five Day Forecast</button>
          </Link>
          <Link to='/location'>
          <button type='button' className='btn btn-default'>Location Update</button>
          </Link>
          <div className='panel panel-default'>
            <div className='panel-body weatherInfo'>
            <h1>Indianapolis</h1>
            <h4>November 1st at 3:00PM</h4>
              {this.props.children}
              
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  }
}

export default Today1
