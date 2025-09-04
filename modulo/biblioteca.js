import readline from "readline-sync";
import { listar_livro, alugar_livro, devolver_livro } from "./mod_livros.js";
while (true) {
  let res = readline.questionInt(`[1] -> Listar os livros disponives
[2] -> Alugar um livro
[3] -> Devolver um livro
[4] -> Encerrar o atendimento
Digite uma opção: `);
  switch (res) {
    case 1:
      listar_livro();
      break;
    case 2:
      alugar_livro();
      break;
    case 3:
      devolver_livro();
      break;
  }
  if (res === 4) {
    console.log(
      "Foi um prazer atende-lo\nA Familia RS agradece a preferencia."
    );
    break;
  }
}
