import React from 'react'

class Form extends React.Component {
  constructor(){
    super()
    this.state = {
      company: '',
      position: '',
      url: '',
      info: null
    }
  }
  handleChange = (event) => {
    this.setState({[event.target.id]: event.target.value})
  }

  componentDidMount(){
    this.setState({
      company: this.props.formInputs.company,
      position: this.props.formInputs.position,
      url: this.props.formInputs.url,
      info: this.props.formInputs.info
    })
  }
  render(){
    return(
        <div class='editform'>
          <form>
            <label htmlFor='company'>Company</label>
            <input type='text' value={this.state.company} id='company' onChange={this.handleChange}/>
            <label htmlFor='position'>Position</label>
            <input type='text' value={this.state.position} id='position' onChange={this.handleChange}/>
            <label htmlFor='url'>URL</label>
            <input type='text' value={this.state.url} id='url' onChange={this.handleChange}/>
            <label htmlFor='info'>Info</label>
            <input type='text' value={this.state.info} id='info' onChange={this.handleChange}/>
            <input type='submit'/>
          </form>
          <button onClick={()=>{this.props.handleView('list')}}>Cancel</button>
        </div>
    )
  }
}

export default Form
