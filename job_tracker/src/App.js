import React from 'react';
import Listings from './components/Listings.js'
import Applied from './components/Applied.js'
import Interview from './components/Interview.js'
import TryAgain from './components/TryAgain.js'
import Form from './components/Form.js'

class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      view: 'list',
      jobs: [
        { id: 1,
          company: 'Amazon',
          position: 'Junior Dev',
          url: 'www.google.com',
          status: 'new',
          date: '12-13-19',
          info: 'Found through LinkedIn'
        },
        {
          id: 2,
          company: 'TP Co',
          position: 'Frontend Dev',
          url: 'www.google.com',
          status: 'new',
          date: '12-13-19',
          info: 'Found through LinkedIn'
        }
      ],
      formInputs: {
        company: 'boo',
        position: '',
        url: '',
        info: ''
      }
    }
  }
  fetchJobs = () => {
    console.log('get all jobs')
  }
  handleChange = (event) => {
    this.setState({[event.target.id]: event.target.value})
  }
  handleCreate = (createdData) => {
    console.log('data for post request', createdData)
  }
  handleUpdate = (updatedData) => {
    console.log('data for put request', updatedData)
    this.handleView('list')
  }
  handleDelete = (deletedData) => {
    console.log('data for delete request', deletedData)
  }
  handleView = (view, data)=>{
    let formInputs = {
      company:'',
      position:'',
      url:'',
      info:''
    }

    switch(view){
      case 'list':
      break
      case 'form':
      formInputs = {
        company: data.company,
        position: data.position,
        url: data.url,
        info: data.info
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
  render(){
    return(
      <div className='container'>
        <header>
          <h1>Job Tracker</h1>
          <h2>Today's Date: 12-13-19</h2>
        </header>
        <div className='addForm'>
        <label htmlFor='form'>Add a New Job Listing</label>
          <form id='form' onSubmit={this.handleCreate}>
            <input type='text' placeholder='Company' onChange={this.handleChange}/>
            <input type='text' placeholder='Position' onChange={this.handleChange}/>
            <input type='text' placeholder='URL' onChange={this.handleChange}/>
            <input type='text' placeholder='More Info' onChange={this.handleChange}/>
            <input type='submit'/>
          </form>
          <br/>
        </div>
        <div className='box-container'>
        {
          (this.state.view === 'form')
          ? <Form handleUpdate={this.handleUpdate} handleView={this.handleView} formInputs={this.state.formInputs}/>
          : null
        }
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
