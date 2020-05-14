console.log("Bem vindo ao jogo de Blackjack!");

if(confirm("Deseja iniciar uma rodada?")) {
    const jogcarta1 = comprarCarta(); 
    const jogcarta2 = comprarCarta();
    const compcarta1 = comprarCarta();
    const compcarta2 = comprarCarta();
    let valorjogcarta1 = jogcarta1.valor;
    let valorjogcarta2 = jogcarta2.valor;
    let valorcompcarta1 = compcarta1.valor;
    let valorcompcarta2 = compcarta2.valor;
    let pontosjogador = valorjogcarta1 + valorjogcarta2;
    let pontoscomputador = valorcompcarta1 + valorcompcarta2;
    
    console.log("Usuário - cartas: " + jogcarta1.texto + " " + jogcarta2.texto + " - pontuação: " + pontosjogador);
    console.log("Computador - cartas: " + compcarta1.texto + " " + compcarta2.texto + " - pontuação: " + pontoscomputador);

    if(pontosjogador === pontoscomputador){
      console.log("Empate!")
    } else if (pontosjogador < pontoscomputador) {
      console.log("O computador ganhou!")
    } else {
      console.log("O usuário ganhou!")
    }

} else {
	console.log("O jogo acabou")
}