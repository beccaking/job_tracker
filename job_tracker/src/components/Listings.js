import React from 'react';

class Listings extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      company: '',
      position: '',
      positionURL: '',
      notes: ''
    }
  }


  render(){
    let newJobs = this.props.jobs.filter(job => job.status === 'new');

    return(
      <div className='column-listings'>
        <h3>Listing ({newJobs.length})</h3>
        <div className='box'>
        {
          newJobs.map((job) => (
            <div key={job.id} className='job'>
              <h4>Date created: {job.listingDate}</h4>
              <h4>Company: {job.company}</h4>
                <h4>Position: <a href={job.positionURL}>{job.position}</a></h4>
              <h4>Notes:</h4>
              <textarea readOnly value={job.notes} /><br/>
              <button onClick={()=>{this.props.handleView('form', job)}}>Edit</button>
              <button onClick={()=>{this.props.handleDelete(job.id)}}>Delete</button>
              <button onClick={()=>{this.props.handleView('appliedDate', job)}}>Applied</button>
            </div>
          ))
        }

        </div>
      </div>
    )
  }
}

export default Listings;
