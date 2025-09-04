class Pessoa {
    constructor(nome, idade, cpf){
        this.nome = nome
        this.idade = idade
        this.cpf = cpf  
    }
    apresentar(){
        console.log(`A pessoa ${this.nome} está se apresentando`)
    }
}
const obj = new Pessoa('Rafael', 39, '13101865731')
obj.apresentar()