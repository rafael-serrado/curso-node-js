console.log('----------------');
console.log('GERADOR DE PREÇO');
console.log('----------------');
readline = require("readline-sync");
let valor = readline.questionFloat('Qual o valor do produto: ');
let forma_de_pagamento = readline.questionInt('Forma de pagamento \nDigite 1 para pagamentoa vista \nDigite [2] para pagamento no debito \nDigite [3] para pagamento no credito \nDigite a sua opcao: ');
console.log(forma_de_pagamento);