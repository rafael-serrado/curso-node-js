readline = requere("readline-sync")
let real = readline.questionFloat('Digite um valor em Real: ')
let dolar = real / 0.19
let euro = real / 0.18
let dolar_canadense = real / 0.25
let libra = real / 0.15
let opcao = readline.question('[1] Para Dólar \n[2] Para Euro \n[3] Para Libra \nDigite uma opção para converter o seu dinheiro: ')
