import React from 'react'

class Form extends React.Component {
  constructor(){
    super()
    this.state = {
      company: '',
      position: '',
      positionURL: '',
      notes: '',
      status: "interview"
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
          <h2>Interview Job Listing</h2>
          <h4>Company: {this.props.formInputs.company}</h4>
          <h4>Position: {this.props.formInputs.position}</h4>
          <h4>Notes:</h4>

          <form onSubmit={this.handleSubmit}>
            <textarea rows="4" cols="50" value={this.state.notes} id='notes' onChange={this.handleChange}></textarea>
            <input type='submit' value="Edit"/>
            <button onClick={()=>{this.props.handleView('list')}}>Cancel</button>
          </form>
        </div>
    )
  }
}

export default Form
