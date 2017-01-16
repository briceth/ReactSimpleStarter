import React, { Component } from 'react';

class SearchBar extends Component {
  render() {
    return <input onChange={this.onInputChange}/>;
  }
//event handler return an
  onInputChange (event) { //event object
    console.log(event.target.value);
  }
}

export default SearchBar;
