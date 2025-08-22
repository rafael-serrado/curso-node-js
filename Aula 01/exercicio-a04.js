readline = require("readline-sync")
let num = readline.questionInt('Digite um numero para ver sua contagem regressiva: ')
let sub = num
for(let i = num; i >= 0; i--){

    console.log(i)
}

