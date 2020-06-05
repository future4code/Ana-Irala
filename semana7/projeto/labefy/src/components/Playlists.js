import React from 'react';
import axios from 'axios';

class Playlists extends React.Component {
    state = {
        name: ""
      };
      
      handlePlaylistChange = event => {
        
        const newPlaylistValue = event.target.value;
        this.setState({ name: newPlaylistValue });
      };


      handleCreatePlaylist = event => { 
          
          const headers= {
            Authorization: "ana-irala-mello"
          };

          const body = {
            name: this.state.name,
          };

          axios.post(
            'https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists' ,
             headers ,
             body
            ).then(() => {
                 console.log('deu certo!') //teste
            }).catch(error => {
                 console.log('erro!');
                });
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