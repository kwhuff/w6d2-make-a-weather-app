import React from 'react'
import classAutoBind from 'react-helpers/dist/classAutobind'
import { Link } from 'react-router'

import { sharedState, attachSharedState, detachSharedState } from 'react-helpers/dist/sharedState'

class Location extends React.Component{
  constructor(props){
    super(props)
    classAutoBind(this)
    this.state = sharedState()
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
              <div className='locationBody'>
              <p className='locationTitle'>Enter New Location</p>
              <textarea className='newLocation' placeholder='Location Name'></textarea>
              <br></br>
              <button type='button' className='btn btn-default locateButton'>Update</button>
              </div>


          </div>
  }
}

export default Location
