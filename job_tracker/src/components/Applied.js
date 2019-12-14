import React from 'react';

class Applied extends React.Component{
  render(){
    return(
      <div className='column applied'>
        <h3>Applied (0)</h3>
        <div className='box'>
          <div className='job'>
            <h4>Date</h4>
            <h4>Company</h4>
            <h4>Position</h4>
            <h4>More Info</h4>
            <button>Edit</button>
            <button>Delete</button>
            <button>Have Interview</button>
          </div>
        </div>
      </div>
    )
  }
}

export default Applied;
