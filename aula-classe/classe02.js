class Carro{
    constructor(modelo, marca, cor, ano_lancamento, velocidade){
        this.modelo = modelo
        this.marca = marca
        this.cor = cor
        this.ano_lancamento = ano_lancamento
        this.velocidade = velocidade
    }
    apresentar(){
        console.log(`MODELO: ${this.modelo}
MARCA: ${this.marca}
COR: ${this.cor}
ANO DE LANÇAMENTO: ${this.ano_lancamento}
VELOCIDADE: ${this.velocidade}`)
    }
    acelerar(qnt){
        this.velocidade += qnt
        console.log(`Agora a velocidade é de ${this.velocidade} kmh`)
    }
    frear(qnt){
        this.velocidade -= qnt
        console.log(`Agora a velocidade é de ${this.velocidade} kmh`)
    }
}
const obj = new Carro('Santana', 'Volkswagen', 'Verde', '1997', 0)
obj.apresentar()
obj.acelerar(100)
obj.frear(20)