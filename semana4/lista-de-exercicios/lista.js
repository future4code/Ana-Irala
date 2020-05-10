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
 Na funçao, usamos a condicional switch case pra dizer o que será feito com cada tipo de argumento tipoDeInvestimento. 
 Por exemplo, no caso do argumento escolhido pelo usuário ser poupança, a variável valorAposInvestimento será 
 o parametro valor dado pelo usuário vezes 1.03.
 No caso do tipoDeInvestimento escolhido pelo usuário náo se encaixar em nenhum case, ele cairá no default e um alert surgirá
 dizendo que o tipo de investimento informado está incorreto. 
 Ao fim da função, retornará o valorAposInvestimento.
 Fora do escopo da função, duas variáveis const : novoMontante, que chama a função e define os argumentos como "Ações"(tipoDeInvestimento) e 150 (valor);
 A outra variável, segundoMontante chama a função e define os argumentos como "Tesouro Direto" e 200
 Ao dar console.log(novoMontante), aparecerá no console 165.
 Ao dar console.log(segundoMontante), uma caixa de alerta será mostrada com a mensagem "TIPO DE INVESTIMENTO INFORMADO INCORRETO!"
 */

 /* Exercício3
 