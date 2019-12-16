import React from 'react'

class Form extends React.Component {
  constructor(){
    super()
    this.state = {
      company: '',
      position: '',
      positionURL: '',
      notes: '',
      applyDate: '',
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
        <div className='modal'>
          <h2>Applied Date</h2>
          <h4>Company: {this.props.formInputs.company}</h4>
          <h4>Position: {this.props.formInputs.position}</h4>

          <form onSubmit={this.handleSubmit}>

              <label htmlFor='applyDate'>Date Applied</label>
              <input type='date' value={this.state.applyDate} id='applyDate' onChange={this.handleChange}/>

            <input type='submit' value="Submit"/>
            {/*
              <button onClick={()=>{this.props.handleView('list')}}>Cancel</button>
              */}

          </form>
        </div>
    )
  }
}

export default Form
