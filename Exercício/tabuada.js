readline = require("readline-sync")
let = n1 = readline.questionInt('Digite umnumero para ver a sua tabuada: ')
let c = 1
while(c <= 10){
    console.log(`${n1} X ${c} = ${n1 * c} `)
    c++
}