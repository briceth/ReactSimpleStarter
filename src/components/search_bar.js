import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' }
  }

  render() {
    return (
      <div className="search-bar">
        <input
          //important to grab the value of the input!
          value={this.state.term}
          onChange={event => this.onChangeTerm(event.target.value)}/>
      </div>
    )
  }

  onChangeTerm(term) {
    this.setState({term})
    this.props.videoSearchTerm(term)
  }


//event handler return an
  // onInputChange(event) { //event object
  //   console.log(event.target.value);
  // }
}

export default SearchBar;
