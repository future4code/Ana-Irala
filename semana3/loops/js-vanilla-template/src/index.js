let sum = 0
for(let i = 0; i < 15; i++) {
  sum += i
}
console.log(sum)
//O resultado impresso é 105
//O programa está criando a soma de todos valores de i enquanto eles forem menores que 15

const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
const novaLista = []
const numero = 5
for(const item of lista) {
  if(item%numero === 0) {
    novaLista.push(item)
  }
}
console.log(novaLista)
//a.push adiciona um item a um array
//b. O valor impresso seria [10, 15, 25, 30] (os numeros que divididos por 5 tem resto zero)
//c. Se o numero fosse 3, os valores impressos seriam [12, 15, 18, 21, 27, 30] 
//pois são os números que divididos por3 tem resto igual a zero
//Já se o número fosse 4, [12]


//exerc.3a
//O maior número é  94 e o menor é  2
let batatas = [2, 4, 8, 33, 37 ,82, 7, 55, 90 ,94]
let max = batatas[0]
let min = batatas[0]

for (let num of batatas) {
  if (num > max) {
      max = num
  }
}

for (let num of batatas) {
  if (num <min) {
      min = num
  }
}
console.log ("O maior número é", max, "e o menor é", min)


//exerc.3b
//O resultado foi [0.2, 0.4, 0.8, 3.3, 3.7, 8.2, 0.7, 5.5, 9, 9.4]
let batatas = [2, 4, 8, 33, 37 ,82, 7, 55, 90 ,94]
novasBatatas = []

for(num of batatas) {
  multiDez = num/10
  novasBatatas.push(multiDez)
}
 console.log (novasBatatas)