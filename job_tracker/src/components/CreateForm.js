import React from 'react'

class Form extends React.Component {
  constructor(){
    super()
    this.state = {
      company: '',
      position: '',
      positionURL: '',
      notes: ''
    }
  }


  handleChange = (event) => {
    this.setState({[event.target.id]: event.target.value})
  }


  handleSubmit = (event) => {
    event.preventDefault()
    if(this.props.view === 'list') {
      this.props.handleCreate(this.state);
      this.setState({
        company: '',
        position: '',
        positionURL: '',
        notes: ''
      })
    } else if(this.props.view === 'form') {
      this.props.handleUpdate(this.state)
    }
  }


  render(){
    return(
        <div className='createform'>
          <h2>Add a New Job Listing</h2>
          
          <form onSubmit={this.handleSubmit}>
            <label htmlFor='company'>Company</label>
            <input type='text' value={this.state.company} id='company' onChange={this.handleChange}/>
            <label htmlFor='position'>Position</label>
            <input type='text' value={this.state.position} id='position' onChange={this.handleChange}/>
            <label htmlFor='positionURL'>URL</label>
            <input type='text' value={this.state.positionURL} id='positionURL' onChange={this.handleChange}/>
            <label htmlFor='notes'>Notes</label>
            <input type='text' value={this.state.notes} id='notes' onChange={this.handleChange}/>
            <input type='submit' value="Add"/>
          </form>
        </div>
    )
  }
}

export default Form
