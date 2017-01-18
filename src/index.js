import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import SearchBar from './components/search_bar';
import VideoDetails from './components/video_details';
import Axios from 'axios';
import Request from 'superagent';

const API_KEY = 'AIzaSyBp5c_RHWKLrImLcj-FNb5Kp5jjzWtlVFI';

// Create a new component. This component should produce some HTML
class App extends Component {
  constructor(props) {
    super(props)

    //empty array before searching
    this.state = {
      videos: [],
      selectedVideo: null
    }

       //Ne supporte pas tous les browsers
       // Axios.get('http://swapi.co/api/people/1/').then((response) => {console.log(response)})

       //Supporte tous les browser, possibilité d'ajouter des headers, exemple= KEY_API
      //  Request('GET', 'http://swapi.co/api/people/1/').then((response) => {
      //     this.setState({
       //
      //     })
      //  }.bind(this));


    YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
      //we update our array
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
       })
      //es6 syntax, only works if the key is the same as the variable name
      //this.setState({ videos: videos })
    });
  }
  render() {
    return (
      <div>
        <SearchBar />
        <VideoDetails video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={selectedVideo => this.setState({selectedVideo}) }
          videos={this.state.videos} />
      </div>
    );
  }
}
// Take this component's generated HTML and put it
// on the page (in the DOM)
ReactDOM.render(
  <App />,
  document.getElementById('container')
);
