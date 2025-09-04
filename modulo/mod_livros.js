import readline from "readline-sync"
let livros = [
  { id: 1, titulo: "Dom Casmurro", autor: "Machado de Assis", disponivel: true},
  {id: 2, titulo: "O Pequeno Príncipe", autor: "Antoine de Saint-Exupéry", disponivel: false},
  { id: 3, titulo: "1984", autor: "George Orwell", disponivel: true},
  {id: 4, titulo: "Capitães da Areia", autor: "Jorge Amado", disponivel: true},
  {id: 5, titulo: "Harry Potter e a Pedra Filosofal", autor: "J.K. Rowling", disponivel: false}
]
export function listar_livro() {
  console.log("-------------")
  console.log("RS Biblioteca")
  console.log("-------------")
  console.log(`Temos as seguintes opções:`)
  livros.forEach((elemento) => {
    let status = elemento.disponivel ? "Disponivel" : "Indisponivel"
    console.log(
      `ID: ${elemento.id}. TÍTULO: ${elemento.titulo}. AUTOR: ${elemento.autor}. STATUS: ${status}`
    )
  })
}
export function alugar_livro() {
  console.log("")
  listar_livro()
  console.log("")
  let opc = readline.questionInt("Digite o ID do livro que deseja alugar: ")
  let livro = livros.find((l) => l.id === opc)
  if (!livro) {
    console.log("Não temos ésta opção")
  } else if (!livro.disponivel) {
    console.log("Infelismente este livro encontra-se INDISPONIVEL.")
  } else {
    livro.disponivel = false
    console.log(`O Livro ${livro.titulo} é uma ótima escolha.`)
  }
}
export function devolver_livro(){
  console.log("")
  listar_livro()
  console.log("")
  let opc = readline.questionInt('Digite o ID do livro que deseja devolver: ')
  let livro = livros.find((l) => l.id === opc)
  if(livro.disponivel){
    console.log(`O livro ${livro.titulo} não foi alugado.`)
  }
  else{
    livro.disponivel = true 
    console.log(`Obrigado por devolver o livro ${livro.titulo}`)
  }

}
