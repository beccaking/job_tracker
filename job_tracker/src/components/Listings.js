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


  handleStatus = (data) => {
    this.setState({
      company: data.company,
      position: data.position,
      positionURL: data.positionURL,
      notes: data.notes,
      status: "applied",
      id: data.id
    }, () => {
      // this.props.handleUpdate(this.state);
      // setTimeout(() => {
      //   console.log("running set Time out");
      //   this.props.handleView('appliedDate', data);
      // }, 2000);

      this.props.handleView('appliedDate', data, () => {
        this.props.handleUpdate(this.state);
      })


    })
  }

  // showForm(job){
  //   this.props.handleView('form', job)
  // }


  render(){
    let newJobs = this.props.jobs.filter(job => job.status === 'new');
    // let newJobs = this.props.jobs;

    return(
      <div className='column-listings'>
        <h3>Listing ({newJobs.length})</h3>
        <div className='box'>
        {
          newJobs.map((job) => (
            <div key={job.id} className='job'>
              <h4>Date created: {job.listingDate}</h4>
              <h4>Company: {job.company}</h4>
              <a href={job.positionURL}>Position: {job.position}</a>
              <h4>Notes:</h4>
              <textarea readOnly value={job.notes} /><br/>
              <button onClick={()=>{this.props.handleView('form', job)}}>Edit</button>
              <button onClick={()=>{this.props.handleDelete(job.id)}}>Delete</button>
              <button onClick={()=>{this.handleStatus(job)}}>Applied</button>
            </div>
          ))
        }

        </div>
      </div>
    )
  }
}

export default Listings;
