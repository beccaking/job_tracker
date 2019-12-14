import React from 'react';

class Listings extends React.Component{
  showForm(job){
    this.props.handleView('form', job)
  }
  render(){
    return(
      <div className='column listings'>
        <h3>Listing ({this.props.jobs.length})</h3>
        <div className='box'>
        {
          this.props.jobs.map((job) => (
            <div className='job'>
              <h4>Date: {job.date}</h4>
              <h4>Company: {job.company}</h4>
              <h4>Position: {job.position}</h4>
              <h4>More Info:</h4>
              <p>{job.info}</p>
              <a href={job.url}>{job.url}</a>
              <br/>
              <button onClick={()=>{this.showForm(job)}}>Edit</button>
              <button>Delete</button>
              <button>Applied</button>
            </div>
          ))
        }
        </div>
      </div>
    )
  }
}

export default Listings;
