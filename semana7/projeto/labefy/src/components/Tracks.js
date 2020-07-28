import React from 'react';
import axios from 'axios';
import styled from "styled-components";


const DeleteButton = styled.span`
  color: red;
  cursor: pointer;
`;

class Tracks extends React.Component {
    state = {
        tracks:[],
        quantity: "",
        name: "",
        artist: "",
        url: ""
    };
      
    handleNameChange = event => {
        const newTrackValue = event.target.value;
        this.setState({ name: newTrackValue });
    };

    handleArtistChange = event => {
        const newArtistValue = event.target.value;
        this.setState({ artist: newArtistValue });
    };

    handleUrlChange = event => {
        const newUrlValue = event.target.value;
        this.setState({ url: newUrlValue });
    };

    handleAddTrack = playlistId => { 
        const axiosConfig = {
            headers: {
                Authorization: 'ana-irala-mello'
            }
        };
        
        const body = {
            
            name: this.state.name, 
            artist: this.state.artist,
            url: this.state.url
        
        };

        axios.post(
            `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${playlistId}/tracks` ,
            body,
            axiosConfig
        )
        .then(() => {
            alert(`Música ${this.state.name} criada com sucesso!`);
            this.setState({ name: '', artist:'', url:''})
            console.log('deu certo!'); //teste
        })
        .catch(error => {
            console.log('erro!'); 
            alert('Erro ao criar o playlist');
        });
    };

    componentDidMount = () => {
        this.getAllTracks(this.props.playlistId);
    };
        
    getAllTracks = playlistId => {
        axios.get(
            `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${playlistId}/tracks`,
            {
                headers: {
                    Authorization: 'ana-irala-mello'
                }
            }
        )
        .then(answer => {
            
            this.setState({ tracks: answer.data.result.tracks });
        })
        .catch(error => {
            console.log('erro!');
        });
    };

    handleTrackDeletion = (playlistId,trackId) => {
        axios.delete(
            `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${playlistId}/tracks/${trackId}`,
            {
                headers: {
                    Authorization: 'ana-irala-mello'
                }
            }
        )
        .then(() => {
            this.getAllTracks();
            alert("Música apagada com sucesso!");
        })
        .catch(e => {
            alert("ERRO AO APAGAR MÚSICA");
        });
    };
        
    render() {
        return (
            <div>
                <h1>LABEFY</h1>;
                <h2>{this.props.playlistName}</h2>
                <div>
                    <input 
                        type="text"
                        value={this.state.name}
                        onChange={this.handleNameChange}
                        placeholder= {'Nome da música'}>
                    </input>;
                    <input 
                        type="text"
                        value={this.state.artist}
                        onChange={this.handleArtistChange}
                        placeholder= {'Nome do artista'}>
                    </input>;
                    <input 
                        type="text"
                        value={this.state.url}
                        onChange={this.handleUrlChange}
                        placeholder= {'Endereço da música'}>
                    </input>;
                    <button onClick={() => this.handleAddTrack(this.props.playlistId)}>ADICIONAR MÚSICA</button>;
                </div>
                
                <ul>
                    {this.state.tracks.map(track => {
                        return (
                         <li key={track.id}>
                            {track.name}
                            {track.artist}
                            <DeleteButton onClick={() => this.handleTrackDeletion(this.props.playlistId,track.id)}>
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

export default Tracks;
