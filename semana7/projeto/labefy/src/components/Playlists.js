import React from 'react';
import axios from 'axios';
import styled from "styled-components";

const DeleteButton = styled.span`
  color: red;
  cursor: pointer;
`;

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

    handlePlaylistDeletion = playlistId => {
        axios.delete(
            `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${playlistId}`,
            {
                headers: {
                    Authorization: 'ana-irala-mello'
                }
            }
        )
        .then(() => {
            this.getPlaylist();
            alert("Playlist apagada com sucesso!");
        })
        .catch(e => {
            alert("ERRO AO APAGAR PLAYLIST");
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
                
                <ul>
                    {this.state.playlists.map(playlist => {
                        return (
                         <li key={playlist.id}>
                            {playlist.name}
                            <DeleteButton onClick={() => this.handlePlaylistDeletion(playlist.id)}>
                             x
                            </DeleteButton>
                         </li>
                        );
                    })}
                   
                </ul>
            </div>
        );
    }
}

export default Playlists;
