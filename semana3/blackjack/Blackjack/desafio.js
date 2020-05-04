console.log("Bem vindo ao jogo de Blackjack!");

if(confirm("Deseja iniciar uma rodada?")) {

   // 1. Loop de sorteio das duas primeiras cartas do jogador:
   let jogcarta; 
   let pontosjogador;
   do {
      jogcarta = [comprarCarta(), comprarCarta()];
      pontosjogador = jogcarta[0].valor + jogcarta[1].valor;
   } while(pontosjogador === 22); // 22 apenas se os dois forem As (2 x 11)

   // 2. Loop de sorteio das duas primeiras cartas do computador:
   let compcarta;
   let pontoscomputador;
   do {
      compcarta = [comprarCarta(), comprarCarta()];
      pontoscomputador = compcarta[0].valor + compcarta[1].valor;
   } while(pontoscomputador === 22); // 22 apenas se os dois forem As (2 x 11)

   // 3. Loop de compras de cartas do jogador:
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
   if(pontosjogador > 21){
      textocartasjogador = "";
      for(item of jogcarta) {
         textocartasjogador = textocartasjogador + " " + item.texto;
      }
   }

   // 4. Loop de compras de cartas do computador:
   if(pontosjogador <= 21) {
      while(pontoscomputador < pontosjogador){
         novacarta = comprarCarta();
         pontoscomputador = pontoscomputador + novacarta.valor;
         compcarta.push(novacarta);
      }
   }
   let textocartascomputador = "";
   for(item of compcarta) {
      textocartascomputador = textocartascomputador + " " + item.texto;
   }
   
   // 5. Exibir resultados:
   alert("Usuário - cartas:" + textocartasjogador + " - pontuação: " + pontosjogador + "\n" +
         "Computador - cartas:" + textocartascomputador + " - pontuação: " + pontoscomputador);
   if(pontosjogador === pontoscomputador){
      alert("Empate!");
   } else if ((pontosjogador > pontoscomputador) && (pontosjogador <= 21)) {
      alert("O usuário ganhou!");
   } else {
      alert("O computador ganhou!");
   }
} else {
 	alert("O jogo acabou");
}

