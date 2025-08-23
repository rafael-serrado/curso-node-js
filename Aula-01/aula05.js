console.log('----------------');
console.log('GERADOR DE PREÇO');
console.log('----------------');
readline = require("readline-sync");
let valor = readline.questionFloat('Qual o valor do produto: ');
let forma_de_pagamento = readline.questionInt('Forma de pagamento \n[1] para pagamentoa vista \n[2] para pagamento no debito \n[3] para pagamento no credito \nDigite a sua opcao: ');
let valor_final 
switch(forma_de_pagamento){
    case(1):
        valor_final = valor - valor * 0.10
        console.log('voçe terá um desconto de 10%. O valor total para pagamento será de R$', valor_final)
        break
    case(2):
        valor_final = valor - valor * 0.05
        console.log('voçe terá um desconto de 5%. O valor total para pagamento será de R$', valor_final)
        break
    case(3):
        console.log('Parcelamos em ate 3x')
        let quant_parcela = readline.questionInt('Qual será a quantidade de parcela? ')
        switch(quant_parcela){
            case(1):
                valor_final = valor
                console.log('voçe não terá desconto  O valor total para pagamento será de R$', valor_final)
                break
            case(2):
                valor_final = valor + valor * 0.05
                console.log('voçe terá um acréscimo de 5%. O valor total para pagamento será de R$', valor_final)
                break
            case(3):
                valor_final = valor + valor * 0.10
                console.log('voçe terá um acréscimo de 10%. O valor total para pagamento será de R$', valor_final)    
                break
        }


}
