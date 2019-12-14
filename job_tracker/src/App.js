import React from 'react';
import Listings from './components/Listings.js'
import Applied from './components/Applied.js'
import Interview from './components/Interview.js'
import TryAgain from './components/TryAgain.js'

class App extends React.Component{
  render(){
    return(
      <div className='container'>
        <header>
        <h1>Job Tracker</h1>
        <h2>Today's Date: TimestampHere </h2>
        </header>
        <div className='box-container'>
          <Listings />
          <Applied />
          <Interview />
          <TryAgain />
        </div>
      </div>
    )
  }
}

export default App;
