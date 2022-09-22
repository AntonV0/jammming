import React from "react";
import "./App.css";
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from "../SearchResults/SearchResults";
import Playlist from "../Playlist/Playlist";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [{name: "Name1", artist: "Artist1", album: "Album1", id: 1},
                      {name: "Name2", artist: "Artist2", album: "Album2", id: 2},
                      {name: "Name3", artist: "Artist3", album: "Album3", id: 3}]
    }
  }
  
  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist">
            <SearchResults searchResults={this.state.searchResults} />
            <Playlist />
          </div>
        </div>
      </div>
    )
  }
}

export default App;
