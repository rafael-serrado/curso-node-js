let nome = 'Gigante'
let altura = 1.94
let peso = 115
let idade = 39
let imc = peso / altura ** 2
console.log(imc)
if(imc < 18.5)
    console.log('Magreza')
else if(imc >= 18.5 && imc < 25)
    console.log('Saldavel')
else if(imc >= 25 && imc < 30)
    console.log('Sobrepeso')
else if(imc >= 30 && imc < 35)
    console.log('Olá & {}Obesidade Gral 1')
else if(imc >= 35 && imc < 40)
    console.log('Obesidade Gral 2')
else if(imc >= 40)
    console.log('Obesidade Gral 3')
