import React, { Component } from 'react';
import './UserForm.scss';

class UserForm extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      quote: '',
      knowledgeLevel: ''
    }
  }

componentDidMount() {
    this.setState({ knowledgeLevel: 'Star What?' })
}

  handleChange = event => {
    this.setState({[event.target.name]: event.target.value})
  }

  //clearInputs

  handleFormSubmit = event => {
    this.props.submitUser({
      user: {
      name: this.state.name,
      quote: this.state.quote,
      knowledgeLevel: this.state.knowledgeLevel
      }
    })
  }
  


  render() {
    return (
      <form>
        <div>
          <label>Your Name?</label>
          <input type="text" value={this.state.name} name="name" onChange={this.handleChange} />
        </div>
        <div>
          <label>Favorite SW Quote?</label>
          <textarea value={this.state.quote} name="quote" onChange={this.handleChange} />
        </div>
        {/* <label>How much do you love Star Wars?</label>
        <select value={this.state.knowledgeLevel} onClick={this.handleChange}>
          <option value="Star What?">Star What?</option>
          <option value="Jedi in Training?">Jedi in Training</option>
          <option value="My firtsborns name is yoda"> My firstborns name is Yoda</option>
        </select>  */}
        <div className="radio">
          <label> 
            <input type='radio' name="knowledgeLevel" value='Star What?' 
            onChange={this.handleChange} /> 
            Star What?
          </label>
        </div>
        <div className="radio">
          <label> 
            <input type='radio' name="knowledgeLevel" value='Jedi in Training?' 
            
            onChange={this.handleChange} /> 
            Jedi in Training
          </label>
        </div>
        <div className="radio">
          <label> 
            <input type='radio' name="knowledgeLevel" value='My firtsborns name is yoda' 
            onChange={this.handleChange} /> 
            My Firstborns names is Yoda
          </label>
        </div> 
        <button type="button" onClick={this.handleFormSubmit}>SUBMIT</button>

      </form>
      )
  }
}

export default UserForm;