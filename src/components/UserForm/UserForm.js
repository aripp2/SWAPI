import React, { Component } from 'react';
import './UserForm.scss';

class UserForm extends Component {
  constructor() {
    super();
    this.state = {
      name
      selectedOption: ''
    }
  }

  handleChange = event =>{
    this.setState({ selectedOption: event.target.value });
      }
  

  render() {
    return (
      <form>
        <div className="radio">
          <label> 
            <input type='radio' value='Star What?' checked={this.state.selectedOption === 'Star What?'} 
            onchange={this.handleChange}></input> 
            Star What?
          </label>
        </div>
        <div className="radio">
          <label> 
            <input type='radio' value='Jedi in Training?' checked={this.state.selectedOption === 'Jedi in Training'} 
            onchange={this.handleChange}></input> 
            Star What?
          </label>
        </div>
        <div className="radio">
          <label> 
            <input type='radio' value='Star What?' checked={this.state.selectedOption === 'Star What?'} 
            onchange={this.handleChange}></input> 
            Star What?
          </label>
        </div>

      </form>
      )
  }
}

export default UserForm;