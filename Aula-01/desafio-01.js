readline = require("readline-sync")
loja = 'RS FESTAS'
gerente = 'Rafael Serrado'
let nome = readline.question('Qual o seu nome: ')
console.log(`
Olá ${nome}, Seja muito bem vindo a ${loja}
Meu nome é ${gerente} e vou fazer seu atendimento hoje.`)
console.log('')
let estoque = [
    {nome: 'Salgadinho', quant: 5000, preco: 0.60},
    {nome: 'Bolo', quant: 100, preco: 120},
    {nome: 'Docinho', quant: 450, preco: 1},
    {nome: 'Refri lata', quant: 200, preco: 5},
    {nome: 'Refri 2L', quant: 50, preco: 12.50}
]
function mostrarestoque() {
    console.log('===============')
    console.log(' ESTOQUE ATUAL ')
    console.log('===============')
    for(let i in estoque){
        console.log('----------------------------------------------')
        console.log(`${estoque[i].nome} - Quantidade: ${estoque[i].quant} - Preço: R$ ${estoque[i].preco.toFixed(2).replace('.', ',')} `)
    }
    console.log('\n')
}

function realizar_pedido(){
    mostrarestoque()
    let n = 1
    for(let i in estoque){
        console.log(`[${n}] --> ${estoque[i].nome}`)
        n++
    }
    let produto
    while (true){
        produto = readline.questionInt('Digite o número correspondente ao iten desejado: ')
        if(produto < 1 || produto > estoque.length){
            console.log('[ERRO] Número invalido')
        }
        else if(estoque[produto-1].quant <= 0){
            console.log(`SINTO MUITO ${nome}, Este item esta com o estoque zerado no momento.`)
        }
        else
            break
    }
    let quantidade
    while (true){
        quantidade = readline.questionInt('Digite a quantidade desejado: ')
        if(quantidade < 1 || quantidade > estoque[produto-1].quant)
            console.log('Quantidade indisponivel, consulte o estoque.')
        else
            break
    }
estoque[produto-1].quant -= quantidade
console.log(`
Ótima escolha ${nome}, Vou te passar os detalhes do seu pedido.
Produto: ${estoque[produto-1].nome} 
Quantidade: ${quantidade}
Valor Total: R$${estoque[produto-1].preco * quantidade.toFixed(2)}

`)
}
realizar_pedido()
while(true){
    let res = readline.question('Gostaria de fazer um novo pedido? Digite [S] ou [N]: ').toUpperCase()
    if(res != 'S' && res != 'N'){
        console.log('ERRO! Opção invalida.')
    }
    else if(res == 'S'){
        realizar_pedido()
    }
    else if(res == 'N'){
        console.log(`
Obrigado pela preferencia ${nome}, Volte Sempre!
    ` )
        break
    }
}