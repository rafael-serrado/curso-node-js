import { Pessoa } from "./classe03.js";

export class Pessoa_F extends Pessoa {
  constructor(nome, idade, telefone, cpf) {
    super(nome, idade, telefone);
    this.cpf = cpf;
  }
  apresentar() {
    return `Olá, meu nome é ${this.nome}
Meu número de telefone é: ${this.telefone} e meu cpf é ${this.cpf}`;
  }
}
