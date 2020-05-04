console.log("Bem vindo ao jogo de Blackjack!");

if(confirm("Deseja iniciar uma rodada?")) {
   let jogcarta; 
   let pontosjogador;

   do {
      jogcarta = [comprarCarta(), comprarCarta()];
      pontosjogador = jogcarta[0].valor + jogcarta[1].valor;
   } while(pontosjogador === 22); // 22 apenas se os dois forem As (2 x 11)

   let compcarta;
   let pontoscomputador;

   do {
      compcarta = [comprarCarta(), comprarCarta()];
      pontoscomputador = compcarta[0].valor + compcarta[1].valor;
   } while(pontoscomputador === 22); // 22 apenas se os dois forem As (2 x 11)

   let textocartasjogador;
   let continuar;
   let novacarta;
   do {
      textocartasjogador = "";
      for(item of jogcarta) {
         textocartasjogador = textocartasjogador + " " + item.texto;
      }

      continuar = confirm("Suas cartas são" + textocartasjogador +
                          ". A carta revelada do computador é " + compcarta[0].texto + "\n" +
                          "Deseja comprar mais uma carta?");
      
      if(continuar){
         novacarta = comprarCarta();
         pontosjogador = pontosjogador + novacarta.valor;
         jogcarta.push(novacarta);
      }
   
   } while(continuar && (pontosjogador <= 21));

      



   
   alert("Usuário - cartas:" + textocartasjogador + " - pontuação: " + pontosjogador);
   alert("Computador - cartas: " + compcarta[0].texto + " " + compcarta[1].texto + " - pontuação: " + pontoscomputador);


    if(pontosjogador === pontoscomputador){
      alert("Empate!");
    } else if (pontosjogador < pontoscomputador) {
      alert("O computador ganhou!");
    } else {
      alert("O usuário ganhou!");
    }

} else {
   	alert("O jogo acabou");
}

