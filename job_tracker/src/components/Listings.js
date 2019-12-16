import React from 'react';

class Listings extends React.Component{

  // showForm(job){
  //   this.props.handleView('form', job)
  // }


  render(){
    return(
      <div className='column-listings'>
        <h3>Listing ({this.props.jobs.length})</h3>
        <div className='box'>
        {
          this.props.jobs.map((job) => (
            <div key={job.id} className='job'>
              <h4>Date created: {job.listingDate}</h4>
              <h4>Company: {job.company}</h4>
              <a href={job.positionURL}>Position: {job.position}</a>
              <h4>Notes:</h4>
              <p>{job.notes}</p>
              <button onClick={()=>{this.props.handleView('form', job)}}>Edit</button>
              <button onClick={()=>{this.props.handleDelete(job.id)}}>Delete</button>
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
