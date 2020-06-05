import React from 'react';
import axios from 'axios';


export default class App extends React.Component {
 
  state = {
    name: ""
  };
  
  handlePlaylistChange = event => {
    
    const newPlaylistValue = event.target.value;
    this.setState({ name: newPlaylistValue });
  };
 
  handleCreatePlaylist = event => {

  };
  

  render () {
    return (
      <div>
        <h1>LABEFY</h1>;
        <input 
          type="text"
          value={this.state.playlist}
          onChange={this.handlePlaylistChange}
          placeholder= {'Nome da playlist'}>
        </input>;
        <button onClick={this.handleCreatePlaylist}>CRIAR PLAYLIST</button>;
      </div>
    );
  }
   
}


