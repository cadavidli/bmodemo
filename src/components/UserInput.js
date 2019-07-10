import React, { Component } from 'react';

class UserInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city : ''
    }

    this.handleCitySubmit = this.handleCitySubmit.bind(this);
    this.handleCityChange = this.handleCityChange.bind(this);
  }
  
  handleCitySubmit(e) {
    e.preventDefault();
    this.props.onCitySubmit(this.state.city);
  }

  handleCityChange(e) {
    this.setState({city: e.target.value});
  }

  render() {
    return (
        <div>
            <form onSubmit={this.handleCitySubmit}>
                <label htmlFor="searchByCity">City: </label>
                
                <input type="text"
                value={this.state.city}
                onChange={this.handleCityChange}
                id="searchByCity"
                name="searchByCity"
                placeholder="Please input a city" />
                
                <button type="submit">Submit</button>
            </form>
        </div>
    )
  }
}
export default UserInput;