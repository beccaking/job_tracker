import React from 'react';
import Listings from './components/Listings.js'
import Applied from './components/Applied.js'
import Interview from './components/Interview.js'
import TryAgain from './components/TryAgain.js'
import Form from './components/Form.js'
import CreateForm from './components/CreateForm.js'
import AppliedForm from './components/AppliedForm.js'
import InterviewForm from './components/InterviewForm.js'
import AppliedDate from './components/AppliedDate.js'


// Set URL for database
let baseUrl = 'http://localhost:8888';
// if (process.env.NODE_ENV === 'development') {
//   baseUrl = 'http://localhost:8888'
// } else {
//   baseUrl = "https://job-tracker-phpreact.herokuapp.com/api"
// }


class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      view: 'list',
      jobs: [],
      formInputs: {
        company: '',
        position: '',
        positionURL: '',
        notes: ''
      }
    }
  }

  fetchJobs = () => {
    // console.log('get all jobs')
    fetch(`${baseUrl}/listings`)
    .then(data=>data.json())
    .then(jData=> {
      this.setState({jobs:jData})
    }).catch(err=>console.log(err))

  }

  handleChange = (event) => {
    this.setState({[event.target.id]: event.target.value})
  }

  handleCreate = (createData) => {
    fetch(`${baseUrl}/listings`, {
      body: JSON.stringify(createData),
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      }
    }).then(createdJobs => {
        return createdJobs.json()
      }).then(jsonedJobs => {
        this.setState({jobs: jsonedJobs})
      }).catch(err => console.log(err))
  }


  handleUpdate = (updateData) => {
    fetch(`${baseUrl}/listings/${updateData.id}`, {
      body: JSON.stringify(updateData),
      method: 'PUT',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      }
    }).then(updatedPost => {
        this.handleView('list')
        this.fetchJobs()
      }).catch(err => console.log(err))
  }


  handleDelete = (id) => {
    fetch(`${baseUrl}/listings/${id}`, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      }
    }).then(json => {
        this.setState({
          jobs: this.state.jobs.filter(job => job.id !== id)
        })
      }).catch(err => console.log(err))
  }


  handleView = (view, data)=>{

    let formInputs = {
      company:'',
      position:'',
      positionURL:'',
      notes:'',
      id: null
    }

    switch(view){
      case 'list':

      break
      case 'form':
      case 'applied':
      case 'interview':
      case 'appliedDate':
      formInputs = {
        company: data.company,
        position: data.position,
        positionURL: data.positionURL,
        notes: data.notes,
        id: data.id
      }
      break
      default:
      break
    }

    this.setState({
      view: view,
      formInputs: formInputs
    }, () => {
      console.log(this.state);
    })
  }




  // Run fetchListings only once after page loads
  componentDidMount(){
    this.fetchJobs()
  }


  render(){
    console.log(baseUrl)
    return(
      <div className='container'>
        <header>
          <h1>Job Tracker</h1>
          <h2>Today's Date: {new Date().toLocaleDateString("en-US")}</h2>
        </header>

        <div className='addForm'>

          {
            (this.state.view === 'list')
            ?
            <CreateForm handleCreate={this.handleCreate} handleView={this.handleView} formInputs={this.state.formInputs} view={this.state.view}/>
            : null
          }

          {
            (this.state.view === 'form')
            ?
            <Form handleUpdate={this.handleUpdate} handleView={this.handleView} formInputs={this.state.formInputs} view={this.state.view}/>
            : null
          }

          {
            (this.state.view === 'appliedDate')
            ?
            <AppliedDate handleUpdate={this.handleUpdate} handleView={this.handleView} formInputs={this.state.formInputs} view={this.state.view}/>
            : null
          }

          {
            (this.state.view === 'applied')
            ?
            <AppliedForm handleUpdate={this.handleUpdate} handleView={this.handleView} formInputs={this.state.formInputs} view={this.state.view}/>
            : null
          }

          {
            (this.state.view === 'interview')
            ?
            <InterviewForm handleUpdate={this.handleUpdate} handleView={this.handleView} formInputs={this.state.formInputs} view={this.state.view}/>
            : null
          }

        </div>

        <div className='box-container'>
            <Listings handleUpdate={this.handleUpdate} handleDelete={this.handleDelete} handleView={this.handleView} jobs={this.state.jobs} formInputs={this.state.formInputs}/>
            <Applied handleUpdate={this.handleUpdate} handleDelete={this.handleDelete} handleView={this.handleView} jobs={this.state.jobs}/>
            <Interview handleUpdate={this.handleUpdate} handleDelete={this.handleDelete} handleView={this.handleView} jobs={this.state.jobs}/>
            <TryAgain jobs={this.state.jobs}/>
        </div>
      </div>
    )
  }
}

export default App;
