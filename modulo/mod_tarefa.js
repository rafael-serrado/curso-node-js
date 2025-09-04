import readline from "readline-sync";
export let tarefas = [];
export function mostrar_tarefas() {
  console.log("");
  if (tarefas.length <= 0) {
    console.log("Voçê não possue tarefas.");
  } else console.log(`Suas tarefas são:`);
  tarefas.forEach((e, i) => {
    console.log(`${i + 1} -> ${e}`);
  });
  console.log("");
}
export function add_tarefa() {
  let tarefa = readline.question("Qual tarefa gostaria de adcionar? ");
  if (tarefas.includes(tarefa)) {
    console.log(`A tarefa ${tarefa} já existe no menu `);
    console.log("");
  } else {
    tarefas.push(tarefa);
    console.log(`A tarefa ${tarefa} foi adcionada `);
    console.log("");
  }
}
export function remover_tarefa() {
  mostrar_tarefas();
  let remover =
    readline.questionInt("Digite o número da tarefa a ser revovida: ") - 1;
  console.log(`A tarefa ${tarefas[remover]} foi removida `);
  tarefas.splice(remover);
  console.log("");
}
