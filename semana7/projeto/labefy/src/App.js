import React from 'react';
import Playlists from './components/Playlists';
import Tracks from './components/Tracks'


export default class App extends React.Component {
  state = {
    currentPage: "Playlists",
    playlistId: "",
    playlistName: "",
  };

  mudarParaPaginaMusicas = (playlistId, playlistName) => {
      this.setState({playlistId:playlistId});
      this.setState({playlistName:playlistName});
      this.setState({currentPage:"Tracks"})
  };

  render () {
    if(this.state.currentPage === "Playlists") {
      return (<Playlists mudarParaPaginaMusicas={this.mudarParaPaginaMusicas} />);
    } else if(this.state.currentPage === "Tracks") {
      return (<Tracks playlistId={this.state.playlistId} playlistName={this.state.playlistName}/>);
    }
  }
   
}


