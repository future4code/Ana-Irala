//exercicio1
const minhaFuncao = (quantidade) => {
	const array = []
	for(let i = 0; i < quantidade; i+=2) {
			for(let j = 0; j < i; j++) {
				array.push(j)
			}
	}
	return array
}
//a) 
console.log(minhaFuncao(2)) //retornou []
//b) 
console.log(minhaFuncao(5)) //retornou [0, 1, 0, 1, 2, 3]
//c) 
console.log(minhaFuncao(8)) //retornou [0, 1, 0, 1, 2, 3, 0, 1, 2, 3, 4, 5]



//exercicio2
let arrayDeNomes = ["Darvas", "Goli", "João", "Paulinha", "Soter"];

const funcao = (lista, nome) => {
  for (let i = 0; i < lista.length; i++) {
    if (lista[i] === nome) {
      return i;
    }
  }
};

console.log(funcao(arrayDeNomes, "Darvas")); // retorna no console 0 que é o índice (posição) do nome (string) "Darvas" dentro da array
console.log(funcao(arrayDeNomes, "João")); //retorna no console 2 que é o índice (posição) do nome "João" dentro da array
console.log(funcao(arrayDeNomes, "Paula")); //retorna undefined, pois não exist a string "Paula" dentro da array
/*b) A funçao funcionaria da mesma maneira.
     Caso fizessemos:

let arrayDeNumeros = [2, 3, 4, 5, 6];

const funcao = (lista, numero) => {
  for (let i = 0; i < lista.length; i++) {
    if (lista[i] === numero) {
      return i;
    }
  }
};

console.log(funcao(arrayDeNumeros, 2)); -----esse retornaria no console a posição do número 2 no array, que é 0;
console.log(funcao(arrayDeNumeros, 4)); -----esse retornaria no console a posição do número 4 no array, que é 2;
console.log(funcao(arrayDeNumeros, 9)); -----esse retornaria no console a posição do número 9 no array, que é undefined, pois ele não está no array;
*/


//exercico3
/*Essa funçao vai adicionando x a variavel resultadoA (que tem valor 0 no começo), 
enquanto vai multiplicando na variavel resultadoB (que tem valor 1)...
usando o for of pra isso.
Esses resultados são adicionados, com uso do .push(), à array final.
Porém, eu não consegui chamar essa função com sucesso */
function metodo(array) {
    let resultadoA = 0;
    let resultadoB = 1;
    let arrayFinal = [];
  
    for (let x of array) {
      resultadoA += x;
      resultadoB *= x;
    }
  
    arrayFinal.push(resultadoA);
    arrayFinal.push(resultadoB);
    return arrayFinal;

  }
  
//exercicio4
//a) eu criei uma função que multiplica por sete o número que for colocado na hora de chamar a função, dando assim a idade humana equivalente
//no console.log coloquei um número pra testar e retornou 28
function idadeCao (i) {
   let equivalenteHumano = i*7;
   return equivalenteHumano;
}
console.log(idadeCao(4))

//b)
//aqui coloquei a variável estuda/não estuda como condição pro if else... deixei os outros parametros pra serem colocados pela pessoa ao chamar a funcao
//então criei uma variável que chama a função com alguns dados e dei um console.log
//o resultado que apareceu no console foi o esperado "Eu me chamo Ana, tenho 200 anos, moro em Marte e sou estudante"
function perfilPessoa (nome,idade,end,estuda) {
    if (estuda === true) {
        console.log(`Eu me chamo ${nome}, tenho ${idade} anos, moro em ${end} e sou estudante`);
    } else {
        console.log(`Eu me chamo ${nome}, tenho ${idade} anos, moro em ${end} e não sou estudante`);
    }

    return
}

let minhaPessoa = perfilPessoa ("Ana", 200, "Marte", true);
console.log(minhaPessoa);