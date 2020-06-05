import React from 'react';


class Playlists extends React.Component {
    state = {
        name: ""
      };
      
      handlePlaylistChange = event => {
        
        const newPlaylistValue = event.target.value;
        this.setState({ name: newPlaylistValue });
      };
     
      handleCreatePlaylist = event => { //aqui vai o axios post
    
      };

   
   
   
   
   
   
    render() {
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

export default Playlists;