const respostaDoUsuario = prompt("Digite o número que você quer testar?")
const numero = Number(respostaDoUsuario)

if(numero % 2 === 0) {
  console.log("Passou no teste.")
} else {
  console.log("Não passou no teste.")
}
//O código pede ao usuário que digite um número. Depois, converte o número que foi dado, que está em formato string, para number.
//Depois testa se esse número é par ou ímpar, testando se o resto da divisão do número dado por dois é igual a zero.
//Usa-se as condicionais if e else.
//Se o número for par, o console imprimirá "Passou no teste"
//Senão, se o número não for par, for ímpar, a mensagem que aparecerá será "Não passou no teste"

let fruta = prompt("Escolha uma fruta")
let preco
switch (fruta) {
  case "Laranja":
    preco = 3.5
    break;
  case "Maçã":
    preco = 2.25
    break;
  case "Uva":
    preco = 0.30
    break;
  case "Pêra":
    preco = 5.5
    break; // BREAK PARA O ITEM d.
  default:
    preco = 5
    break;
}
console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)
//O código serve para fornecer o preço de uma fruta, quando o nome da fruta é dado pelo usuário
//O preço da fruta Maçã é R$2.25
//(2*3.5)+2.25+(3*5)+0.30=R$24,55 (A banana não encontra-se na lista, portnto o preço dela será o do default)
//Sem o break, o preço da pêra aparece como cinco reais, que é o valor do default


const numero1 = prompt("Digite o primeiro número.")
const numero2 = prompt("Digite o próximo número?")

if(numero1 > 0 && numero2 > 0) {
  let mensagem
  if(numero1 > numero2) {
    mensagem = "Número 1 é maior que o 2!"
  } else {
    mensagem = "Número 1 é menor ou igual ao 2!"
  }
}

console.log(mensagem)
//Erro de sintaxe. 
//Primeiro que os números dados pelo usuário não foram convertidos de string pra number
//Depois, o console.log está fora do escopo onde está a variável mensagem.

//exerc.4-a
let numero1 = prompt("Digite um número.")
let numero2 = prompt("Digite outro número.")

let num1 = Number(numero1)
let num2 = Number(numero2)

if (num1>num2) {
    console.log (num1, num2)
} else {
    console.log (num2, num1)
}

//exerc.4-b
let numero1 = prompt("Digite um número.")
let numero2 = prompt("Digite outro número.")
let numero3 = prompt("Agora , mais um último número!")

let num1 = Number(numero1)
let num2 = Number(numero2)
let num3 = Number(numero3)

if (num1>num2) {
  if (num2>num3){
    console.log (num1, num2,num3)
  } if (num3>num2){
    console.log (num1, num3, num2)
  }
}