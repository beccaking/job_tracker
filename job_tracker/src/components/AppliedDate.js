import React from 'react'

class Form extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      company: "",
      position: "",
      positionURL: "",
      notes: "",
      applyDate: "",
      interviewDate: "",
      id: ""
    }
  }


  handleChange = (event) => {
    this.setState({[event.target.id]: event.target.value});
  }


  handleSubmit = (event) => {
    event.preventDefault()
    const argument = {...this.state, status: (this.props.view==="appliedDate")? "applied":"interview"}
    this.props.handleUpdate(argument)
  }



  componentDidMount(){
    console.log("componentDidMount is running");
    this.setState({
      company: this.props.formInputs.company,
      position: this.props.formInputs.position,
      positionURL: this.props.formInputs.positionURL,
      notes: this.props.formInputs.notes,
      applyDate: this.props.formInputs.applyDate,
      interviewDate: this.props.formInputs.interviewDate,
      id: this.props.formInputs.id
    })
    console.log(this.props.formInputs);
  }


  render(){
    return(
        <div className='modal'>
          {(this.props.view==="appliedDate")?
           <h2>Applied Date</h2>
           :<h2>Interview Date</h2>}

          <h4>Company: {this.props.formInputs.company}</h4>
          <h4>Position: {this.props.formInputs.position}</h4>

          <form onSubmit={this.handleSubmit}>
              {(this.props.view==="appliedDate")?
                <input type='date' value={this.state.applyDate} id='applyDate' onChange={this.handleChange}/>
                :
                <input type='date' value={this.state.interviewDate} id='interviewDate' onChange={this.handleChange}/>
               }
               <input type='submit' value="Submit"/>
          </form>



        </div>
    )
  }
}

export default Form
