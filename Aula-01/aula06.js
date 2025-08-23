readline = require("readline-sync")
let salario = readline.questionFloat('Digite o valor do seu salário para saber o seu auxílio: ')
let idade = readline.questionInt('Digite a sua idade: ')
let auxilio = 0
if(salario <= 1000){
    if(idade <= 18){
        auxilio = 1000
        console.log('Com o salario de R$',salario, 'Você tem direito a um auxílio de R$', auxilio)
    }
    else{
        console.log('Com o salario de R$',salario, 'e', idade, 'anos. Você não tem direito a um auxílio')
    }
}
else if(salario <= 2000){
    auxilio = 500
    console.log('Com o salario de R$',salario, 'Você tem direito a um auxílio de R$', auxilio)
}
else if(salario <= 3000){
    auxilio = 100
    console.log('Com o salario de R$',salario, 'Você tem direito a um auxílio de R$', auxilio)
}
else{
    console.log('Com o salario de R$',salario, 'Você não tem direito a um auxílio')
}
