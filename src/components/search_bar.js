import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: 'default state' }
  }
  render() {
    return (
      <div className="search-bar">
        <input
          //important to grab the value of the input!
          value={this.state.term}
          onChange={event => this.setState({ term: event.target.value })}/>
      </div>
    )
  }
//event handler return an
  onInputChange (event) { //event object
    console.log(event.target.value);
  }
}

export default SearchBar;
