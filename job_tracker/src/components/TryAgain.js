import React from 'react';

class TryAgain extends React.Component{
  render(){
    return(
      <div className='column tryagain'>
        <h3>Try Again (0)</h3>
        <div className='box'>
          <div className='job'>
            <h4>Date</h4>
            <h4>Company</h4>
            <h4>Position</h4>
            <h4>More Info</h4>
            <button>Edit</button>
            <button>Delete</button>
          </div>
        </div>
      </div>
    )
  }
}

export default TryAgain;
