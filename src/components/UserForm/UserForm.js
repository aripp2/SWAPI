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

  handleNameChange = event => {
    this.setState({ name: event.target.value });
    console.log("name", this.state.name)
      }

  handleQuotesChange = event => {
    this.setState( {quote: event.target.value} )
    console.log("quote", this.state.quote)
  }

  handleLevelChange = event => {
    event.preventDefault()
   this.setState({knowledgeLevel: event.target.value})
    console.log('knowledge level', this.state.knowledgeLevel)
  }

  // handleFormSubmit = event => {

  // }
// 

  

  render() {
    return (
      <form onSubmit={this.handleFormSubmit}>
        <div>
          <label>Your Name?</label>
          <input type="text" value={this.state.name} onChange={this.handleNameChange} />
        </div>
        <div>
          <label>Favorite SW Quote?</label>
          <textarea value={this.state.quotes} onChange={this.handleQuotesChange} />
        </div>
        {/* <label>How much do you love Star Wars?</label>
        <select value={this.state.knowledgeLevel} onClick={this.handleLevelChange}>
          <option value="Star What?">Star What?</option>
          <option value="Jedi in Training?">Jedi in Training</option>
          <option value="My firtsborns name is yoda"> My firstborns name is Yoda</option>
        </select> */} 
        <div className="radio">
          <label> 
            <input type='radio' value='Star What?' checked={this.state.knowledgeLevel === 'Star What?'} 
            onChange={this.handleLevelChange} /> 
            Star What?
          </label>
        </div>
        <div className="radio">
          <label> 
            <input type='radio' value='Jedi in Training?' checked={this.state.knowledgeLevel === 'Jedi in Training'} 
            onChange={this.handleLevelChange} /> 
            Jedi in Training
          </label>
        </div>
        <div className="radio">
          <label> 
            <input type='radio' value='My firtsborns name is yoda' checked={this.state.knowledgeLevel === 'My firtsborns name is yoda'} 
            onChange={this.handleLevelChange} /> 
            My Firstborns names is Yoda
          </label>
        </div>
        <button type="submit">SUBMIT</button>

      </form>
      )
  }
}

export default UserForm;