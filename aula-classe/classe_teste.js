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

import { Pessoa } from "./classe03.js";

export class Pessoa_F extends Pessoa {
  constructor(nome, idade, telefone, cpf) {
    super(nome, idade, telefone);
    this.cpf = cpf;
  }
  apresenta() {
    return `Olá, meu nome é ${this.nome}. Meu cpf é ${this.cpf}`;
  }
}
