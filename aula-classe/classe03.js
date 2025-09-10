export class Pessoa {
  #idade;
  constructor(nome, idade, telefone) {
    this.nome = nome;
    this.#idade = idade;
    this.telefone = telefone;
  }
  apresentar() {
    return `Olá, meu nome é ${this.nome} e tenho ${this.#idade} anos de idade
Meu número de telefone é: ${this.telefone}`;
  }
}
