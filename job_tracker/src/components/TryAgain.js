import React from 'react';

class TryAgain extends React.Component{
  render(){
    let rejectedJobs = this.props.jobs.filter(job => job.status === 'rejected');

    return(
      <div className='column-applied'>
        <h3>Try Again ({rejectedJobs.length})</h3>
        <div className='box'>
        {
          rejectedJobs.map((job) => (
            <div key={job.id} className='job'>
              <h4>Date created: {job.listingDate}</h4>
              <h4>Company: {job.company}</h4>
              <a href={job.positionURL}>Position: {job.position}</a>
              <h4>Notes:</h4>
              <textarea readOnly value={job.notes} /><br/>

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
