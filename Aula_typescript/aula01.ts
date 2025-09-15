class ContaBancaria {
    nome: string;
    saldo: number;
    debitar: number;
    juros: number;

    constructor(nome: string, saldo: number, debitar: number, juros: number){
        this.nome = nome
        this.saldo = saldo
        this.debitar = debitar
        this.juros = juros
    }
    debitarValor(){
        this.saldo -= this.debitar
    }
    aplicarJuros(){
        (this.saldo + this.debitar) * this.juros
    }
    apresentar(){
            return `Olá ${this.nome}, o seu saldo atual é de R$ ${this.saldo} `
    }
    
}
const obj = new ContaBancaria( 'Rafael' , 250, 100, 0.10)
console.log(obj.apresentar());