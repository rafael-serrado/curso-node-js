import { Pessoa } from "./classe03.js";
import { Pessoa_F } from "./classe03_1.js";
import { Pessoa_J } from "./classe03_2.js";
const p1 = new Pessoa("Rafael Serrado", 39, "21-964153384");
const p2 = new Pessoa_F("Rafael", 38, "964153384", "13102768731");
const p3 = new Pessoa_J(
  "Suellen Serrado",
  38,
  "21970231815",
  "45847301000119",
  "RS-Festas"
);
console.log(p1.apresentar());
console.log(p2.apresentar());
console.log(p3.apresentar());
