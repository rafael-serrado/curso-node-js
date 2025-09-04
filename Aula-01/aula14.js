let vendas = [
    {nome: 'Salgadinho', quant: 5000, preco: 0.60},
    {nome: 'Bolo', quant: 100, preco: 120},
    {nome: 'Docinho', quant: 450, preco: 1},
    {nome: 'Refri lata', quant: 200, preco: 5},
    {nome: 'Refri 2L', quant: 50, preco: 12.50}
]
function tot_vendas(){
    for(let i in vendas){
        console.log(`${vendas[i].nome} vendeu um total de ${vendas[i].quant * vendas[i].preco}`)
    }
}
let tot = 0
vendas.forEach(element => {
    console.log(`${element.nome} vendeu um total de R$ ${element.quant * element.preco}`)
    tot += element.quant * element.preco
})
console.log(`A RS Festas vendeu um total de R$ ${tot.toFixed(2)} no mês de Agosto`)