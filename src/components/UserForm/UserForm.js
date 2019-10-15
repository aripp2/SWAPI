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

  handleChange = event => {
    this.setState({[event.target.name]: event.target.value})
  

  handleFormSubmit = event => {
      this.props.submitUser({
      name: this.state.name,
      quote: this.state.quote,
      knowledgeLevel: this.state.knowledgeLevel
    })

  }
  
  render() {
    const isNotDisabled = (this.state.name !== '') && (this.state.quote !== '') && (this.state.knowledgeLevel !== '')
    return (
      <div className="user_profile-div">
        <img className="user_profile-image" alt="Yo Jedi laser gif animation gif r2d2 cat menu starwars force jedi" src="https://cdn.dribbble.com/users/1539273/screenshots/6122439/spoilers_drib.gif" />
        <div className="user_profile-h1-div">
          <h1 className="user_profile-h1">WELCOME TO <br /> SWAPI TRIVIA! </h1>
        </div>
        <form className="user_form">
          <div className="user_name-div">
            <label className="user_name-label">Name</label>
            <input className="user_name-input" type="text" value={this.state.name} name="name" onChange={(event) => this.handleChange(event)} />
          </div>
          <div className="user_quote-div">
            <label className="user_quote-label">Favorite SW Quote?</label>
            <textarea className="user_quote-textarea" value={this.state.quote} name="quote" onChange={(event) => this.handleChange(event)} />
          </div>
          <div className="user_radio-btn-div">
            <label className="user_radio-title">How much do you know about Star Wars?</label>
            <div className="user_radio-div">
              <label className="user_radio-label"> 
                <input className="user_radio-input" type='radio' name="knowledgeLevel" value='Star What?' 
                  onChange={(event) => this.handleChange(event)} /> 
                Star What?
              </label>
            </div>
            <div className="user_radio-div">
              <label className="user_radio-label"> 
                <input className="user_radio-input" type='radio' name="knowledgeLevel" value='Jedi in Training?'
                onChange={(event) => this.handleChange(event)}/> 
                Jedi in Training
              </label>
            </div>
            <div className="user_radio-div">
              <label className="user_radio-label"> 
                <input className="user_radio-input" type='radio'  value='My firtsborns name is yoda' 
                name="knowledgeLevel"
                onChange={(event) => this.handleChange(event)} /> 
                My Firstborns names is Yoda
              </label>
            </div> 
          </div>
          <Link to='/movies'><button className="user-submit-btn" type="submit" disabled={!isNotDisabled} onClick={this.handleFormSubmit}>ENTER</button></Link>
        </form>
      </div>
      )
  }
}

export default UserForm;