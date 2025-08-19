readline = require("readline-sync");
let real = readline.questionFloat('Digite um valor em Real: ');
let dolar = real / 0.19
let euro = real / 0.18
let dolar_canadense = real / 0.25
let libra = real / 0.15
let opcao = readline.questionInt('[1] Para Dólar \n[2] Para Euro \n[3] Para Libra \n[4] Para Dolar Canadense \nDigite uma opção para converter o seu dinheiro: ');
switch(opcao){
    case(1):
        console.log('Com R$',real, 'Voce pode comprar USD', dolar)
        break
    case(2):
        console.log('Com R$',real, 'Voce pode comprar EUR', euro)
        break 
    case(3):
        console.log('Com R$',real, 'Voce pode comprar GPB', libra)
        break
    case(4):
        console.log('Com R$',real, 'Voce pode comprar USD', dolar_canadense)
        break
}