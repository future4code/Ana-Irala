/* Ex1-a: 

const minhaString:string = 8; 

nesse caso, a IDE já avisa que o 8 não pode ser referenciado como do tipop string.
A mensagem "Type '8' is not assignable to type 'string'"
*/

/*Ex1-b: */

const meuNumero:number=8;

//Para que a const aceite também strings, podemos escrevê-la assim:
const meuNumeroEString: number|string = "Agora posso fazer isso"

/*Ex1-c:*/

const pessoa: {nome:string, idade:number, corFavorita:string}= {
    nome:"Bart Simpson",
    idade: 10,
    corFavorita:"azul claro"
}

/*Ex1-d:*/

enum ARCOIRIS {
    VIOLETA="violeta",
    ANIL="anil",
    AZUL="azul",
    VERDE="verde",
    AMARELO="amarelo",
    LARANJA="laranja",
    VERMELHO="vermelho"
}

type pessoa = {
    nome:string,
    idade:number,
    corFavorita:ARCOIRIS
}

const marge:pessoa = {
    nome: "Marge Simpson",
    idade:40,
    corFavorita: ARCOIRIS.AZUL
}

const homer:pessoa = {
    nome: "Homer Simpson",
    idade:40,
    corFavorita: ARCOIRIS.AMARELO
}

const lisa:pessoa = {
    nome: "Lisa Simpson",
    idade: 8,
    corFavorita: ARCOIRIS.ANIL
}

