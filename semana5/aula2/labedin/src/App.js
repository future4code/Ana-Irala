import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import CardPequeno from './components/CardPequeno/CardPequeno';
import ImagemButton from './components/ImagemButton/ImagemButton';
import fotoPerfil from './components/imagens/atmi.jpg';
import IbUsp from './components/imagens/ibusp.png';
import IpUsp from './components/imagens/ipusp.png';
import IconeEmail from './components/imagens/mail.png';
import EnderecoIcone from './components/imagens/casaIcone.png';


function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem={fotoPerfil} 
          nome="Ana T. M. Irala" 
          descricao="Oi, eu sou a Ana. Sou bióloga e estudante da Labenu. Curto aprender coisas novas e agora estou me dedicando a aprender desenvolvimento web e programação"
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">
        <CardPequeno 
          imagem={IconeEmail}
          texto="atmirala@gmail.com"
        />

        <CardPequeno 
          imagem={EnderecoIcone}
          texto="Avenida da Galáxia, 42. "
        />
      </div>    
        

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png" 
          nome="Labenu" 
          descricao="Aluna web dev" 
        />
        
        <CardGrande 
          imagem={IbUsp}
          nome="IB USP" 
          descricao="Biologia molecular e genética da conservação." 
        />

        <CardGrande 
          imagem={IpUsp} 
          nome="IP USP" 
          descricao="Pesquisa em comportamento animal de animais sociais." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
