import React from 'react';

class Applied extends React.Component{
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
    // this.setState({
    //   company: data.company,
    //   position: data.position,
    //   positionURL: data.positionURL,
    //   notes: data.notes,
    //   applyDate: data.applyDate,
    //   status: "interview",
    //   id: data.id
    // }, () => {
    //   // this.props.handleUpdate(this.state);
    //   // setTimeout(() => {
    //   //   this.props.handleView('interviewDate', data);
    //   // }, 2000);
    //
    //   this.props.handleView('interviewDate', data, () => {
    //     this.props.handleUpdate(this.state);
    //   })
    //
    //
    //
    // })

    this.props.handleView('interviewDate', data);
  }


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
              <h4>Date applied: {job.applyDate}</h4>
              <h4>Company: {job.company}</h4>
              <a href={job.positionURL}>Position: {job.position}</a>
              <h4>Notes:</h4>
              <textarea readOnly value={job.notes} /><br/>
              <button onClick={()=>{this.props.handleView('applied', job)}}>Edit</button>
              <button onClick={()=>{this.props.handleDelete(job.id)}}>Delete</button>
              <button onClick={()=>{this.handleStatus(job)}}>Have Interview</button>
            </div>
          ))
        }

        </div>
      </div>
    )
  }
}

export default Applied;
