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






//LOGICA DE PROGRAMACAO

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





//FUNÇÕES

/*Exercício2*/
let alertaFuture = () => {
    alert("Hello Future4!");
}

alertaFuture ();