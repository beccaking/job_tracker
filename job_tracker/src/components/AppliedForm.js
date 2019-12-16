import React from 'react'

class Form extends React.Component {
  constructor(){
    super()
    this.state = {
      company: '',
      position: '',
      positionURL: '',
      notes: '',
      status: "applied"
    }
  }


  handleChange = (event) => {
    this.setState({[event.target.id]: event.target.value})
  }


  handleSubmit = (event) => {
    event.preventDefault()
    this.props.handleUpdate(this.state)
  }



  componentDidMount(){
    // console.log("componentDidMount is running");
    this.setState({
      company: this.props.formInputs.company,
      position: this.props.formInputs.position,
      positionURL: this.props.formInputs.positionURL,
      notes: this.props.formInputs.notes,
      id: this.props.formInputs.id
    })
  }


  render(){
    return(
        <div className='editform'>
          <h2>Applied Job Listing</h2>
          <h4>Company: {this.props.formInputs.company}</h4>
          <h4>Position: {this.props.formInputs.position}</h4>
          <h4>Notes:</h4>

          <form onSubmit={this.handleSubmit}>


            {/*
              <label htmlFor='company'>Company</label>
              <input type='text' value={this.state.company} id='company' onChange={this.handleChange}/>
              <label htmlFor='position'>Position</label>
              <input type='text' value={this.state.position} id='position' onChange={this.handleChange}/>
              <label htmlFor='positionURL'>URL</label>
              <input type='text' value={this.state.positionURL} id='positionURL' onChange={this.handleChange}/>
              <label htmlFor='notes'>Notes</label>

              <input type='text' value={this.state.notes} id='notes' onChange={this.handleChange}/>
              */}

            <textarea rows="4" cols="50" value={this.state.notes} id='notes' onChange={this.handleChange}></textarea>
            <input type='submit' value="Edit"/>
            <button onClick={()=>{this.props.handleView('list')}}>Cancel</button>
          </form>
        </div>
    )
  }
}

export default Form