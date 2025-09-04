let produto = [
{nome: 'celular', preco: 1800},
{nome: 'capinha', preco: 20},
{nome: 'carregador', preco: 250},
{nome: 'fone', preco: 10}]

produto.forEach(elemento =>{
        if(elemento.preco > 10){
            console.log(`O Produto ${elemento.nome} custa R$ ${elemento.preco.toFixed(2)}`)
    }
})
