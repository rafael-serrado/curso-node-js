let alunos= [
    {nome: 'Rafael', nota: 9.5},
    {nome: 'Suellen', nota: 10},
    {nome: 'Dulcinea', nota: 6.5}]
let soma 
for(soma in alunos){
    soma += soma 
}
let media = soma / alunos.length
console.log(`No total, São ${alunos.length} alunos e a madia das notas é ${media.toFixed(2)} `)
