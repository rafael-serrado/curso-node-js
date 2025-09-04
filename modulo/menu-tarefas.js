import readline from "readline-sync"
import {mostrar_tarefas, add_tarefa, remover_tarefa} from "./mod_tarefa.js"
console.log('---------------')
console.log('MENU DE TAREFAS')
console.log('---------------')
console.log('')
while (true){
    let opc = readline.questionInt(`[1] -> Mostrar suas tarefas
[2] -> Adicionar uma tarefa
[3] -> Remover uma tarefa
[4] -> Fechar o menu

Digite a sua opção: `)
    if(opc < 0 && opc > 4){
        console.log('ERRO: Opção invalida, tente novamente!')
    }
    else if(opc > 0 && opc < 4){
        switch(opc){
            case(1):
                mostrar_tarefas()
                break
            case(2):
                add_tarefa()
                break
            case(3):
                remover_tarefa()
        }
    
    }
    else if(opc == 4){
        console.log('Finalizando o menu!\nVolte sempre!\nFIM!\n')
        break
    }
}