import React from 'react';
import axios from 'axios';

class Playlists extends React.Component {
    state = {
        name: "",
        playlists:[]
    };
      
    handleNameChange = event => {
        const newPlaylistValue = event.target.value;
        this.setState({ name: newPlaylistValue });
    };

    handleCreatePlaylist = event => { 
        const axiosConfig = {
            headers: {
                Authorization: 'ana-irala-mello'
            }
        };
        
        const body = {
            name: this.state.name
        };

        axios.post(
            'https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists' ,
            body,
            axiosConfig
        )
        .then(() => {
            alert(`Playlist ${this.state.name} criada com sucesso!`);
            this.setState({ name: ''});
            console.log('deu certo!'); //teste
        })
        .catch(error => {
            console.log('erro!'); 
            alert('Erro ao criar o playlist');
        });
    };

    componentDidMount = () => {
        this.getPlaylist();
    };
        
    getPlaylist = () => {
        axios.get(
            'https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists',
            {
                headers: {
                    Authorization: 'ana-irala-mello'
                }
            }
        )
        .then(answer => {
            this.setState({ playlists: answer.data.result.list });
        })
        .catch(error => {
            console.log('erro!');
        });
    };
        
    render() {
        return (
            <div>
                <h1>LABEFY</h1>;
                <div>
                    <input 
                        type="text"
                        value={this.state.name}
                        onChange={this.handleNameChange}
                        placeholder= {'Nome da playlist'}>
                    </input>;
                    <button onClick={this.handleCreatePlaylist}>CRIAR PLAYLIST</button>;
                </div>
                <div>
                    {this.state.playlists.map(playlist => {
                        return <p key={playlist.id}>{playlist.name}</p>;
                    })}
                </div>
            </div>
        );
    }
}

export default Playlists;
