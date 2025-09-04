import { sum, sub, mult, div } from './mod_calcular.js'
import readline from "readline-sync"

while(true){
    let n1 = readline.questionInt('Digite o primeiro numero: ')
    let n2 = readline.questionInt('Digite o segundo numero: ')
    let opc = readline.questionInt(`[1] -> Somar
[2] -> Subtrair
[3] -> Multiplicar
[4] -> Dividir
Escolha sua opção: `)
    if(opc >= 1 && opc <= 4){
        switch(opc){
            case(1):
                console.log(sum(n1, n2))
                break
            case(2):
                console.log(sub(n1, n2))
                break
            case(3):
                console.log(mult(n1, n2))
                break
            case(4):
                console.log(div(n1, n2))
                break
        }
    }
    else
        console.log('Opção Invalida')
    let res = readline.question('Deseja fazer outro cálculo? [S] ou [N]: ').toUpperCase()
    if(res == 'S'){
        console.log('Muito bem!\nVamos continuar!')
    }
    else
        console.log('Calculadora Finalizada!\nFIM!!\n')
        break
}