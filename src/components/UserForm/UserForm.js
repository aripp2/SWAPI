import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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

// componentDidMount() {
//     this.setState({ knowledgeLevel: 'Star What?' })
// }

  handleChange = event => {
    this.setState({[event.target.name]: event.target.value})
  }

  handleFormSubmit = event => {
    // event.preventDefault();
    this.props.submitUser({
      name: this.state.name,
      quote: this.state.quote,
      knowledgeLevel: this.state.knowledgeLevel
    })
  }
  
  render() {
    return (
      <div className="user_profile-div">
        <img className="user_profile-image" alt="Yo Jedi laser gif animation gif r2d2 cat menu starwars force jedi" src="https://cdn.dribbble.com/users/1539273/screenshots/6122439/spoilers_drib.gif" />
        <div className="user_profile-h1-div">
          <h1 className="user_profile-h1">WELCOME TO SWAPI TRIVIA! </h1>
        </div>
        <form className="user_form">
          <div className="user_name-div">
            <label className="user_name-label">Your Name?</label>
            <input className="user_name-input" type="text" value={this.state.name} name="name" onChange={this.handleChange} />
          </div>
          <div className="user_quote-div">
            <label className="user_quote-label">Favorite SW Quote?</label>
            <textarea className="user_quote-textarea" value={this.state.quote} name="quote" onChange={this.handleChange} />
          </div>
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
              My Firstborns name is Yoda
            </label>
          </div> 
          <Link to='/movies'><button className="user-submit-btn" type="submit" onClick={this.handleFormSubmit}>ENTER</button></Link>
        </form>
      </div>
      )
  }
}

export default UserForm;