readline = require("readline-sync")
let estoque = [
    {nome: 'Salgadinho', quant: 5000, preco: 0.60},
    {nome: 'Bolo', quant: 100, preco: 120},
    {nome: 'Docinho', quant: 450, preco: 1},
    {nome: 'Refri lata', quant: 200, preco: 5},
    {nome: 'Refri 2L', quant: 50, preco: 12.50},
]
function mostrarestoque() {
    console.log('===============')
    console.log(' ESTOQUE ATUAL ')
    console.log('===============')
    for(let i in estoque){
        console.log('----------------------------------------------')
        console.log(`${estoque[i].nome} - Quantidade: ${estoque[i].quant} - Preço: R$ ${estoque[i].preco.toFixed(2).replace('.', ',')} `)
        
    }
}

function realizar_pedido(){
    //mostrarestoque()
    for(let produtos in estoque){
        //let n = 1
        console.log(`\n${estoque[produtos].nome}`)
       // n++
    }
    //let produto = readline.require('')
}
console.log(mostrarestoque())