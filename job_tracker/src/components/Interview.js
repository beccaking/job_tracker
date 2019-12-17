import React from 'react';

class Interview extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      company: '',
      position: '',
      positionURL: '',
      notes: ''
    }
  }


  handleStatus = (data) => {
    this.setState({
      company: data.company,
      position: data.position,
      positionURL: data.positionURL,
      notes: data.notes,
      applyDate: data.applyDate,
      interviewDate: data.interviewDate,
      tryAgainDate: new Date(),
      // tryAgainDate: new Date(new Date().setDate(new Date().getDate()-6)),
      status: "rejected",
      id: data.id
    }, () => {
      this.props.handleUpdate(this.state);
    })


  }


  render(){
    let interviewJobs = this.props.jobs.filter(job => job.status === 'interview');

    return(
      <div className='column-applied'>
        <h3>Interview ({interviewJobs.length})</h3>
        <div className='box'>
        {
          interviewJobs.map((job) => (
            <div key={job.id} className='job'>
              <h4>Date created: {job.listingDate}</h4>
              <h4>Date applied: {job.applyDate}</h4>
              <h4>Date interview: {job.interviewDate}</h4>
              <h4>Company: {job.company}</h4>
              <h4>Position: <a href={job.positionURL}>{job.position}</a></h4>
              <h4>Notes:</h4>
              <textarea readOnly value={job.notes} /><br/>
              <button onClick={()=>{this.props.handleView('interview', job)}}>Edit</button>
              <button onClick={()=>{this.props.handleDelete(job.id)}}>Delete</button>
              <button onClick={()=>{this.handleStatus(job)}}>Rejected</button>
            </div>
          ))
        }

        </div>
      </div>
    )
  }
}

export default Interview;
