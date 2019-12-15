import React from 'react';

class Interview extends React.Component{
  render(){
    const interviews = this.props.jobs.filter(job => job.status === 'interview')
    return(
      <div className='column-interview'>
        <h3>Interview ({interviews.length})</h3>
        <div className='box'>
        {
          interviews.map((job) => (
            <div key={job.id} className='job'>
              <h4>Date created: {job.listingDate}</h4>
              <h4>Company: {job.company}</h4>
              <a href={job.positionURL}>{job.positionURL}</a>
              <h4>Position: {job.position}</h4>
              <h4>Notes:</h4>
              <p>{job.notes}</p>
              <button onClick={()=>{this.showForm(job)}}>Edit</button>
              <button onClick={()=>{this.props.handleDelete(job.id)}}>Delete</button>
              <button onClick={()=>{this.props.handleStatusChange(job.id, 'tryagain')}}>Rejection</button>
            </div>
          ))
        }
        </div>
      </div>
    )
  }
}

export default Interview;
