alert("Bem vindo ao jogo de Blackjack!")
prompt("Deseja iniciar uma jogada")





cost cartas = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]
const naipes = ["♦️", "♥️", "♣️", "♠️"]

if (numero === "A") {
   valor = 11
 } else if (numero === "J" || numero === "Q" || numero === "K") {
   valor = 10
 } else {
   valor = Number(numero)
 }