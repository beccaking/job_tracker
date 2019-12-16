import React from 'react';

class Applied extends React.Component{

  render(){
    let appliedJobs = this.props.jobs.filter(job => job.status === 'applied');

    return(
      <div className='column-applied'>
        <h3>Applied ({appliedJobs.length})</h3>
        <div className='box'>
        {
          appliedJobs.map((job) => (
            <div key={job.id} className='job'>
              <h4>Date created: {job.listingDate}</h4>
              <h4>Company: {job.company}</h4>
              <a href={job.positionURL}>Position: {job.position}</a>
              <h4>Notes:</h4>
              <textarea readOnly value={job.notes} /><br/>
              <button onClick={()=>{this.props.handleView('applied', job)}}>Edit</button>
              <button onClick={()=>{this.props.handleDelete(job.id)}}>Delete</button>
              <button onClick={()=>{this.props.handleStatusChange(job.id, 'interview')}}>Have Interview</button>
            </div>
          ))
        }

        </div>
      </div>
    )
  }
}

export default Applied;
