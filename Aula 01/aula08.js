console.log('--------')
console.log('Pessoas')
console.log('--------')
let pessoas = 
[{nome:'Rafael', idade: 39, cidade: 'São Gonçalo'},
{nome: 'Suellen', idade: 38, cidade: 'São Gonçalo'}]
for(let i in pessoas){
    console.log(`${pessoas[i].nome} tem ${pessoas[i].idade} e mora em ${pessoas[i].cidade}`)
        
}