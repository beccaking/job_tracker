import React from 'react';

class TryAgain extends React.Component{
  render(){
    const tryagain = this.props.jobs.filter(job => job.status === 'tryagain')
    return(
      <div className='column-tryagain'>
        <h3>Try Again ({tryagain.length})</h3>
        <div className='box'>
        {
          tryagain.map((job) => (
            <div key={job.id} className='job'>
              <h4>Date created: {job.listingDate}</h4>
              <h4>Company: {job.company}</h4>
              <a href={job.positionURL}>{job.positionURL}</a>
              <h4>Position: {job.position}</h4>
              <h4>Notes:</h4>
              <p>{job.notes}</p>
              <button onClick={()=>{this.props.handleDelete(job.id)}}>Delete</button>
            </div>
          ))
        }
        </div>
      </div>
    )
  }
}

export default TryAgain;
