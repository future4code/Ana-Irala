//INTERPRETAÇÃO DE CÓDIGO

/*Exercício1
Foi feita uma função que possui um argumento valorEmDolar.
 Nessa função, um prompt pede que o usuario dê a cotação do dolar 
 e converte o valor dado pelo usuário (uma string) em number e 
 guarda isso na constante cotacao. Depois retorna a string "R$" mais o valorEmDolar (argumento )
 vezes a cotacao (constante).
 Então, uma constante meuDinheiro é criada pra guardar a chamada da função com o argumento 
 valorEmDolar de 100.
 Ao chamar console.log(meuDinheiro), imprimirá no console o valor em reais de 100 dólares.
 No caso da cotaçao fornecida ser igual a 5, 
 apareceria no console "R$500"
 */

 /*Exercicio2
 Temos uma função investeDinheiro, com os argumentos tipoDeInvestimento e valor. 
 Na funçao, usamos a condicional switch case pra dizer o que será feito com cada valor de argumento tipoDeInvestimento. 
 Por exemplo, no caso do argumento escolhido pelo usuário ser poupança, a variável valorAposInvestimento será 
 o parametro valor dado pelo usuário vezes 1.03.
 No caso do tipoDeInvestimento escolhido pelo usuário náo se encaixar em nenhum case, ele cairá no default e um alert surgirá
 dizendo que o tipo de investimento informado está incorreto. 
 Ao fim da função, retornará o valorAposInvestimento.
 Fora do escopo da função, duas variáveis const : novoMontante, que chama a função e passa os argumentos como "Ações"(tipoDeInvestimento) e 150 (valor);
 A outra variável, segundoMontante chama a função e passa os argumentos como "Tesouro Direto" e 200
 Ao executar console.log(novoMontante), aparecerá no console 165.
 Ao executar console.log(segundoMontante), uma caixa de alerta será mostrada com a mensagem "TIPO DE INVESTIMENTO INFORMADO INCORRETO!"
 */

 /* Exercício3
 Temos três variáveis, um array com números (const numeros) e 
 dois arrays ainda vazios (const array1 e const array2).
 Depois, usando um for of, nós vamos "correr" pelo array numeros e selecionar 
 os números contidos nesse array em pares e ímpares. 
 Se eles forem pares (dividindo o número por 2 o resto é zero), 
 ele será adicionado ao array1 (usando o array1.push(numero));
 Senão (else), ele será adicionado ao array2 (usando o .push()).
 Depois daremos um console.log em que pediremos o número total de números e, para isso,
 utilizaremos o numeros.length. Será impresso no console : 
 "Quantidade total de números 14".
 Depois, utilizaremos o .length para fazer o mesmo com array1 e array2.
 No console.log(array1.length), teremos no console o número 6;
 No console.log(array2.length), teremos no console o número 8.
*/

/*Exercício4
*/







//LOGICA DE PROGRAMACAO

/*Exercício1
Três maneiras de se iterar um array é usando forEach, Map e filter.
Abaixo temos os três exemplificados interagindo com a mesma array:
*/
let array = [ 0, 1, 2, 3, 4, 5 ];

function cadaElemento(elemento, index) {
    console.log("[" + index + "] = " + elemento);
}
array.forEach(cadaElemento);

fuction calculaDobro(numero) {
	console.log(numero * 2);
	return numero * 2;
}
let dobros = array.map(calculaDobro);
dobros.forEach(cadaElemento);

function par(value) {
  return (value % 2) == 0;
}

var pares = array.filter(par);
pares.forEach(cadaElemento);

/*Exercício2
a)false
b)false
c)true
d)true
e)false
*/
const booleano1 = true
const booleano2 = false
const booleano3 = !booleano2 //true
const booleano4 = !booleano3 //false

/*Exercício3
O código original não funcionava por algumas razões... quantidadeDeNumerosPares não estava declarado
nem tinha informação alguma;
while tinha que ter como parametro i < e não i<=, pois começa com zero e colocando o igual, vai retornar um
valor a mais do que queremos. Por exemplo, mantendo o <=, se dermos o valor de 3 para o quantidadeDeNumerosPares,
ao inves de retornar no console o esperado (0, 2, 4), irá aparecer 0, 2, 4, 6.
Além disso, faltava implementar o i++, que indica pro nosso código que queremos adicionar 1
ao i, cada vez que ele rodar (enquanto - while- i for menor que o valor de quantidadeDeNumerosPares)
Em seguida, temos o código corrigido e testado!*/
const quantidadeDeNumerosPares = Number(prompt("Digite a quantidade de números pares que deseja."));
let i = 0
while(i < quantidadeDeNumerosPares) {
console.log(i*2);
i++;
}

/*Exercício4
*/
function triangulos (a,b,c) {
    if (a===b){
       if (b===c){
           return "Equilátero"
       }
       else{
           return "Isósceles"
       }
    }
    else {
        if (b===c) {
            return "Isósceles"
        }
        else if (a===c) {
            return "Isósceles"
        }
        else {
            return "Escaleno"
        }
    }
}

/*Exercício5
*/
function logica5 (x, y) {
	console.log("ENTRADA:");
	console.log(x + " e " + y);
	console.log("");
	console.log("SAÍDA:");
	let maior;
	let menor;
	if(x > y) {
		maior = x;
		menor = y;
	} else {
		maior = y;
		menor = x;
	}
	console.log("O maior é: " + maior);
	if (x % y == 0) {
		console.log(x + " é divisível por " + y);
	} else {
		console.log(x + " não é divisível por " + y);
	}
	if (y % x == 0) {
		console.log(y + " é divisível por " + x);
	} else {
		console.log(y + " não é divisível por " + x);
	}
	console.log("A diferença entre eles é " + (maior - menor));
}


//FUNÇÕES
/*Exercícios1*/
let dados = [77, 55, 12, 96, 5, -56, -32, 6];

function betas(array){
	let maior = -Infinity;
	let segundoMaior = -Infinity;
	let menor = Infinity;
	let segundoMenor = Infinity;
	
	for(let elemento of array){
		if(elemento < menor){
			segundoMenor = menor;
			menor = elemento;
		} else {
			if(elemento < segundoMenor) {
				segundoMenor = elemento;
			}
		}
		if(elemento > maior){
			segundoMaior = maior;
			maior = elemento;
		} else {
			if(elemento > segundoMaior) {
				segundoMaior = elemento;
			}
		}
	}
	
	console.log("segundo menor = " + segundoMenor);
	console.log("segundo maior = " + segundoMaior);
}
betas(dados);


/*Exercício2*/
let alertaFuture = () => {
    alert("Hello Future4!");
}

alertaFuture ();


//OBJETOS

/*Exercício1
Array é uma lista, um conjunto de informações, de dados indexados, em que cada elemento possui um index que indica sua posição.
Objetos são uma espécie de variável mas que possui vários atributos.De certa maneira, objetos são como 
arrays que, ao invés de possui index, possui nomes que possuem um valor.
*/

/*Exercício2
Crie uma função chamada criaRetangulo que recebe como parâmetros dois lados
 (lado1 e lado2) e retorna um objeto com 
 4 informações: largura (lado1), altura (lado2), 
 perímetro (2 * (lado1 + lado2)) e área (lado1 * lado2).
*/
function criaRetangulo (lado1, lado2) {
    let retangulitos = {
        largura: lado1,
        altura: lado2,
        perimetro: 2*(lado1 + lado2),
        area: lado1 * lado2,
    }
    return retangulitos
}

/*Exercicio3
3. Crie um objeto para representar seu filme favorito. 
Ele deve ter as seguintes propriedades: título, ano, diretor e 
atores/atrizes (lista com pelo menos 2 atores/atrizes). 
Imprima na tela a seguinte string, baseada nos valores do objeto:
`Venha assistir ao filme NOME DO FILME, de ANO, dirigido por DIRETOR e 
estrelado por ATOR 1, ATRIZ 2, ATOR n`. 
A lista de atores/atrizes deve ser impressa inteira, independente do tamanho da lista.
*/
let filmeFavorito = {
    titulo: "Mulholland Drive",
    ano: 2001,
    diretor: "David Lynch",
    atrizesAtores: ["Naomi Watts", "Laura Harring", "Justin Theroux"],
}

console.log(`Venha assistir ao filme ${filmeFavorito.titulo}, de ${filmeFavorito.ano}, dirigido por ${filmeFavorito.diretor} e estrelado por ${filmeFavorito.atrizesAtores}.`)

/*Exercício4*/
let perfilPessoa = {
    nome: "Fulano da Silva",
    idade: 33,
    email: "fulano@gmail.com",
    end: "Rua dos Fundos, 666, Cafundós",
}

function anonimizarPessoa (objeto) {
    let perfilAnonimo = {
        nome:"ANÔNIMO", 
        idade: objeto.idade, 
        email: objeto.email, 
        end:objeto.end,
    }
    return perfilAnonimo
}

let perfilAnonimo = anonimizarPessoa(perfilPessoa);
console.log(perfilAnonimo)


//FUNÇÕES DE ARRAY

/*Exercício1
*/
let dados = [
	{ nome: "Pedro", idade: 20 },
	{ nome: "João", idade: 10 },
	{ nome: "Paula", idade: 12 },
	{ nome: "Artur", idade: 89 } 
]

function selecionaCriancas(x){
	function isCrianca(value) {
		return value.idade < 20;
	}
	return x.filter(isCrianca);
}

let criancas = selecionaCriancas(dados);

function selecionaAdultos(x){
	function isAdulto(value) {
		return value.idade >= 20;
	}
	return x.filter(isAdulto);
}

let adultos = selecionaAdultos(dados);

console.log(dados);
console.log(criancas);
console.log(adultos);

/*Exercício2
*/
const array = [1, 2, 3, 4, 5, 6];

function arrayDobro(x){
	return x.map(function(z){
		return 2 * z;
	});
}

function arrayTriploString(x){
	return x.map(function(z){
		return "" + (3 * z);
	});
}

function arrayIdentificandoPares(x){
	return x.map(function(z){
		if(z % 2 === 0){
			return "" + z + " é par";
		} else {
			return "" + z + " é ímpar";
		}
	});
}

console.log(array);
console.log(arrayDobro(array));
console.log(arrayTriploString(array));
console.log(arrayIdentificandoPares(array));

/*Exercício3
*/
const pessoas = [
	{ nome: "Paula", idade: 12, altura: 1.8},
	{ nome: "João", idade: 20, altura: 1.3},
	{ nome: "Pedro", idade: 15, altura: 1.9},
	{ nome: "Luciano", idade: 22, altura: 1.8},
	{ nome: "Artur", idade: 10, altura: 1.2},
	{ nome: "Soter", idade: 70, altura: 1.9}
]

function selecionarAutorizados(x){
	return x.filter(function(z){
		if(z.idade < 14){
			return false;
		} else if(z.idade > 60){
			return false;
		} else if(z.altura < 1.5){
			return false;
		} else {
			return true;
		}
	});
}

function selecionarQueremEntrarMasNaoPodem(x){
	return x.filter(function(z){
		if(z.idade < 14){
			return true;
		} else if(z.idade > 60){
			return true;
		} else if(z.altura < 1.5){
			return true;
		} else {
			return false;
		}
	});
}

console.log(pessoas);
console.log(selecionarAutorizados(pessoas));
console.log(selecionarQueremEntrarMasNaoPodem(pessoas));