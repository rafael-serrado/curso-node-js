import { Pessoa } from "./classe03.js";
import { Pessoa_F } from "./classe03_1.js";

export class Pessoa_J extends Pessoa {
  constructor(nome, idade, telefone, cnpj, razao) {
    super(nome, idade, telefone);
    this.cnpj = cnpj;
    this.razao = razao;
  }
  apresentar() {
    return `Olá, meu nome é ${this.nome} 
Meu número de telefone é: ${this.telefone} o cnpj da minha empreza é ${this.cnpj}
E a minha empresa se chama ${this.razao}`;
  }
}
