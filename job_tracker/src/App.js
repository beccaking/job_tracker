import React from 'react';
import Listings from './components/Listings.js'
import Applied from './components/Applied.js'
import Interview from './components/Interview.js'
import TryAgain from './components/TryAgain.js'
import Form from './components/Form.js'

// Set URL for database
let baseUrl = '';
if (process.env.NODE_ENV === 'development') {
  baseUrl = 'http://localhost:8888'
} else {
  console.log('this is for heroku');
}

class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      view: 'list',
      jobs: [],
      formInputs: {
        company: 'boo',
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
    // console.log('data for post request', createdData)

    fetch(`${baseUrl}/listings`, {
    body: JSON.stringify(createData),
    method: 'POST',
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json'
    }
  })
  .then(createdPost => {
    return createdPost.json()
  })
  .then(jsonedPost => {
    this.props.handleView("home");
    this.setState(prevState => {
      prevState.posts = jsonedPost
      return { posts: prevState.posts }
    })
  })
  .catch(err => console.log(err))
  }

  handleUpdate = (updatedData) => {
    console.log('data for put request', updatedData)
    this.handleView('list')
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
      notes:''
    }

    switch(view){
      case 'list':
      break
      case 'form':
      formInputs = {
        company: data.company,
        position: data.position,
        positionURL: data.positionURL,
        notes: data.notes
      }
      break
      default:
      break
    }
    this.setState({
      view: view,
      formInputs: formInputs
    })
  }



  // Run fetchListings only once after page loads
  componentDidMount(){
    this.fetchJobs()
  }

  render(){
    return(
      <div className='container'>
        <header>
          <h1>Job Tracker</h1>
          <h2>Today's Date: 12-13-19</h2>
        </header>

        <div className='addForm'>
        {/*
          <label htmlFor='form'>Add a New Job Listing</label>
            <form id='form' onSubmit={this.handleSubmit}>
              <input type='text' placeholder='Company' id="company" value={this.state.formInputs.company} onChange={this.handleChange}/>
              <input type='text' placeholder='Position' id="position" value={this.state.formInputs.position} onChange={this.handleChange}/>
              <input type='text' placeholder='URL' id="positionURL" value={this.state.formInputs.positionURL} onChange={this.handleChange}/>
              <input type='text' placeholder='Notes' id="notes" value={this.state.formInputs.notes} onChange={this.handleChange}/>
              <input type='submit'/>
            </form>
            <br/>
          */}

        {
          (this.state.view === 'list')
          ? <>
          <h2>Add a New Job Listing</h2>
          <Form handleUpdate={this.handleCreate} handleView={this.handleView} formInputs={this.state.formInputs} view={this.state.view}/>
          </>
          : <>
          <h2>Edit Job Listing</h2>
          <Form handleUpdate={this.handleUpdate} handleView={this.handleView} formInputs={this.state.formInputs} view={this.state.view}/>
          </>

        }
        </div>

        <div className='box-container'>
        {/*
          {
            (this.state.view === 'form')
            ? <Form handleUpdate={this.handleUpdate} handleView={this.handleView} formInputs={this.state.formInputs} view={this.state.view}/>
            : null
          }
          */}

            <Listings handleDelete={this.handleDelete} handleView={this.handleView} jobs={this.state.jobs} formInputs={this.state.formInputs}/>
            <Applied jobs={this.state.jobs}/>
            <Interview jobs={this.state.jobs}/>
            <TryAgain jobs={this.state.jobs}/>
        </div>
      </div>
    )
  }
}

export default App;
