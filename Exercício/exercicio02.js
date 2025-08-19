readline = require("readline-sync")
let salario_anual = readline.questionFloat('Digite o seu salario anual: ')
let tempo_servico = readline.questionInt('Digite quantos anos voce tem de tempo de servico: ')
let pontuacao = readline.questionInt('Qual e a sua pontuacao de desempenho [de 1 a 10]: ')
let bonus_base 
let bonus_pont 
if(tempo_servico <= 2)
    bonus_base = salario_anual + salario_anual * 0.05
else if (tempo_servico > 2 && tempo_servico < 5)
    bonus_base = salario_anual + salario_anual * 0.10
else if(tempo_servico >= 5)
    bonus_base = salario_anual + salario_anual * 0.15

if(pontuacao <= 4)
    bonus_pont = 0
else if(pontuacao > 4 && pontuacao <= 7)
    bonus_pont = bonus_base + bonus_base * 0.20
else if(pontuacao > 7 && pontuacao <= 10)
    bonus_pont = bonus_base + bonus_base * 0.50
let tot_bonus = bonus_base + bonus_pont
console.log('Com o salario de', salario_anual,'.', tempo_servico, 'Anos de tempo de servico e uma pontuacao de', pontuacao, '\nSeu bonos total a ser recebido e de R$',tot_bonus)

