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

  handleFormSubmit = event => {
    event.preventDefault();
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
      <form className="user_form">
        <div className="user_name-div">
          <label className="user_name-label">Your Name?</label>
          <input className="user_name-input" type="text" value={this.state.name} name="name" onChange={this.handleChange} />
        </div>
        <div className="user_quote-div">
          <label className="user_quote-label">Favorite SW Quote?</label>
          <textarea className="user_quote-textarea" value={this.state.quote} name="quote" onChange={this.handleChange} />
        </div>
        {/* <label>How much do you love Star Wars?</label>
        <select value={this.state.knowledgeLevel} onClick={this.handleChange}>
          <option value="Star What?">Star What?</option>
          <option value="Jedi in Training?">Jedi in Training</option>
          <option value="My firtsborns name is yoda"> My firstborns name is Yoda</option>
        </select>  */}
        <div className="user_radio-div">
          <label className="user_radio-label"> 
            <input className="user_radio-input" type='radio' name="knowledgeLevel" value='Star What?' 
            onChange={this.handleChange} /> 
            Star What?
          </label>
        </div>
        <div className="user_radio-div">
          <label className="user_radio-label"> 
            <input className="user_radio-input" type='radio' name="knowledgeLevel" value='Jedi in Training?' 
            
            onChange={this.handleChange} /> 
            Jedi in Training
          </label>
        </div>
        <div className="user_radio-div">
          <label className="user_radio-label"> 
            <input className="user_radio-input" type='radio' name="knowledgeLevel" value='My firtsborns name is yoda' 
            onChange={this.handleChange} /> 
            My Firstborns names is Yoda
          </label>
        </div> 
        <button className="user-submit-btn" type="submit" onClick={this.handleFormSubmit}>SUBMIT</button>


      </form>
      )
  }
}

export default UserForm;